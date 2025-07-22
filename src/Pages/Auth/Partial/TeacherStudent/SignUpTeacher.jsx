import useAxiosPublic from "@/Hooks/Fetcher/useAxiosPublic";
import { button } from "@/Utils/Class/button";
import { input } from "@/Utils/Class/input";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Swal from "sweetalert2";

const SignUpTeacher = () => {
  const [term, setTerm] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [loader, setLoader] = useState(false);
  const [otp, setOtp] = useState(null);
  const [otpOpen, setOtpOpen] = useState(false);
  const [seeOTp, setSeeOtp] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const teacher_id = e.target.teacher_id.value;
    const teacher_name = firstName + " " + lastName;
    const teacher_email = e.target.email.value;
    const teacher_phone = e.target.phone.value;
    const gender = e.target.gender.value;
    const date_of_birth = e.target.phone.value;
    const password = e.target.password.value;
    const password_confirmation = e.target.re_password.value;
    const address = e.target.phone.value;
    const course_1 = e.target.course_1.value;
    const course_2 = e.target.course_2.value;
    const course_3 = e.target.course_3.value;
    const facebook_link = e.target.facebook_link.value;
    const designation = e.target.designation.value;
    const youtube_link = e.target.youtube_link.value;
    const photo = e.target?.photo?.files[0] || null;

    if (password !== password_confirmation) {
      setLoader(false);
      return toast.error("Password not match");
    }

    const formData = new FormData();
    formData.append("teacher_name", teacher_name);
    formData.append("teacher_email", teacher_email);
    formData.append("teacher_phone", teacher_phone);
    formData.append("password", password);
    formData.append("password_confirmation", password_confirmation);
    formData.append("teacher_id", teacher_id);
    formData.append("gender", gender);
    formData.append("date_of_birth", date_of_birth);
    photo && formData.append("photo", photo);
    formData.append("address", address);
    formData.append("course_1", course_1);
    formData.append("course_2", course_2);
    formData.append("course_3", course_3);
    formData.append("facebook_link", facebook_link);
    formData.append("youtube_link", youtube_link);
    formData.append("designation", designation);
    try {
      const res = await axiosPublic.post("/api/teacher-register", formData);
      if (res.data.message) {
        toast.success(res.data.message);
        setSeeOtp(res.data.verifyCode);
        // e.target.reset();
        setLoader(false);
        setOtpOpen(true);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setLoader(false)
    }
  };

  const handleOtp = async () => {
    try {
      const res = await axiosPublic.post("/api/otp-verify-code", {
        verify_code: otp,
      });
      if (res.data.message) {
        setOtpOpen(false);
        Swal.fire({
          title: "Registration successful",
          text: "Waiting for approve account",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:flex-1">
      <h1 className="uppercase text-lg lg:text-xl font-semibold text-color_2 mb-3">
        create an account
      </h1>
      <hr />
      {otpOpen || (
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="">
              <label className="font-semibold">
                First Name
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="firstName"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Last Name
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="lastName"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Email
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <input
                type="email"
                name="email"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Phone
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="phone"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Gender
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <select name="gender" className={`${input.form}`} id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="">
              <label className="font-semibold">
                Subject
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="course_1"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Subject 2
                {/* <span className="text-red-400 ml-1 text-sm">(required)</span>{" "} */}
              </label>
              <input
                type="text"
                name="course_2"
                className={input.form}
                placeholder="Type Here"
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Subject 3
                {/* <span className="text-red-400 ml-1 text-sm">(required)</span>{" "} */}
              </label>
              <input
                type="text"
                name="course_3"
                className={input.form}
                placeholder="Type Here"
              />
            </div>
            <div className="">
              <label className="font-semibold">
                YouTube Link
                <span className="text-red-400 ml-1 text-sm">(required)</span>
              </label>
              <input
                type="text"
                name="youtube_link"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Social Media Link
                <span className="text-red-400 ml-1 text-sm">(required)</span>
              </label>
              <input
                type="text"
                name="facebook_link"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Teacher Unique ID
                <span className="text-red-400 ml-1 text-sm">(required)</span>
              </label>
              <input
                type="text"
                name="teacher_id"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Designation
                <span className="text-red-400 ml-1 text-sm">(required)</span>
              </label>
              <input
                type="text"
                name="designation"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Photo
                <span className="text-red-400 ml-1 text-sm">(required)</span>
              </label>
              <input
                type="file"
                name="photo"
                className={input.form}
                id=""
                required
              />
            </div>
            <div className="relative">
              <label className="font-semibold">
                Password
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className={input.form}
                placeholder="Type Here"
                required
              />
              <div className="absolute right-2 top-9">
                {showPass ? (
                  <span>
                    <FaEye
                      onClick={() => setShowPass(!showPass)}
                      className="text-gray-400"
                    />
                  </span>
                ) : (
                  <span>
                    <FaEyeSlash
                      onClick={() => setShowPass(!showPass)}
                      className="text-gray-400"
                    />
                  </span>
                )}
              </div>
            </div>
            <div className="relative">
              <label className="font-semibold">
                Re-Type Password
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <input
                type={showPass2 ? "text" : "password"}
                name="re_password"
                className={input.form}
                placeholder="Type Here"
                required
              />
              <div className="absolute right-2 top-9">
                {showPass2 ? (
                  <span>
                    <FaEye
                      onClick={() => setShowPass2(!showPass2)}
                      className="text-gray-400"
                    />
                  </span>
                ) : (
                  <span>
                    <FaEyeSlash
                      onClick={() => setShowPass2(!showPass2)}
                      className="text-gray-400"
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
          <p className="my-3 flex items-center gap-2">
            <input onChange={() => setTerm(!term)} type="checkbox" id="term" />
            <label className="text-gray-600" htmlFor="term">
              I Accept your terms & conditions
            </label>
          </p>
          <button
            disabled={!term || loader}
            type="submit"
            className={`${button.form} ${!term && "cursor-not-allowed"}`}
          >
            {loader ? (
              "loading..."
            ) : (
              <>
                <FaUserAlt className="text-gray-100" />
                Create Account
              </>
            )}
          </button>
        </form>
      )}
      {otpOpen && (
        <div className="flex justify-center mt-2">
          <div className="flex flex-col justify-center">
            <p>{seeOTp}</p>
            <h1 className="text-center text-lg lg:text-xl font-semibold mb-2">
              Enter Your OTP
            </h1>
            <InputOTP onChange={(e) => setOtp(e)} maxLength={6}>
              <InputOTPGroup className="gap-2">
                <InputOTPSlot className="border-color_2" index={0} />
                <InputOTPSlot className="border-color_2" index={1} />
                <InputOTPSlot className="border-color_2" index={2} />
                <InputOTPSlot className="border-color_2" index={3} />
                <InputOTPSlot className="border-color_2" index={4} />
                <InputOTPSlot className="border-color_2" index={5} />
              </InputOTPGroup>
            </InputOTP>
            <button
              onClick={handleOtp}
              className={`bg-color_1 text-white px-3 py-0.5 text-medium hover:bg-color_2 duration-200 mt-2`}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpTeacher;
