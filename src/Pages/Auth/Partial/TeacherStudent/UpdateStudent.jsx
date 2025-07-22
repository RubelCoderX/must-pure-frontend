
import useAxiosSecure from "@/Hooks/Fetcher/useAxiosSecure";
import { button } from "@/Utils/Class/button";
import { input } from "@/Utils/Class/input";
import { useState } from "react";
import {  FaUserAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateStudent = () => {
  const axiosPublic = useAxiosSecure();
  const [loader, setLoader] = useState(false);
  const {state} = useLocation();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const firstName = e.target.firstName.value;
    const student_name = firstName;
    const student_email = e.target?.email?.value || null;
    const student_phone = e.target.phone.value;
    const gender = e.target?.gender?.value || null;
    const date_of_birth = e.target?.date_of_birth?.value || null;
    const address = e.target.phone.value;
    const classes = e.target.class.value;
    const photo = e.target?.photo?.files[0] || null;


    const formData = new FormData();
    formData.append("student_name", student_name);
    formData.append("user_id", state.id);
    student_email && formData.append("student_email", student_email);
    formData.append("student_phone", student_phone);
    gender && formData.append("gender", gender);
    date_of_birth && formData.append("date_of_birth", date_of_birth);
    photo && formData.append("photo", photo);
    formData.append("address", address);
    formData.append("class", classes);

    try {
      const res = await axiosPublic.post("/api/profile/update", formData);
      if (res.data.message) {
        toast.success(res.data.message);
        e.target.reset();
        setLoader(false);
        navigate('/student/profile')
      }
    } catch (error) {
      toast.error(error.response);
      setLoader(false)
    }
  };


  return (
    <div className="lg:flex-1">
      <h1 className="uppercase text-lg lg:text-xl font-semibold text-color_2 mb-3">
        Update your Account
      </h1>
      <hr />
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="">
            <label className="font-semibold">
              First Name
              <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
            </label>
            <input
              type="text"
              name="firstName"
              defaultValue={state.userData.student_name}
              className={input.form}
              placeholder="Type Here"
              required
            />
          </div>
          <div className="">
            <label className="font-semibold">
              Email
              {/* <span className="text-red-400 ml-1 text-sm">(required)</span>{" "} */}
            </label>
            <input
              type="email"
              name="email"
              defaultValue={state.userData.student_email}
              className={input.form}
              placeholder="Type Here"
            />
          </div>
          <div className="">
            <label className="font-semibold">
              Phone
              <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
            </label>
            <input
              type="text"
              defaultValue={state.userData.student_phone}
              name="phone"
              className={input.form}
              placeholder="Type Here"
              required
            />
          </div>
          <div className="">
            <label className="font-semibold">
              Date of Birth
              <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
            </label>
            <input
              type="date"
              className={input.form}
              name="date_of_birth"
              id=""
            />
          </div>
          <div className="">
            <label className="font-semibold">
              Gender
              <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
            </label>
            <select name="gender" className={`${input.form}`} id="">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="">
            <label className="font-semibold">
              Class
              <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
            </label>
            <input
              type="text"
              name="class"
              defaultValue={state.userData.class}
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
            />
          </div>
        </div>
        <button
          disabled={ loader}
          type="submit"
          className={`${button.form} mt-2`}
        >
          {loader ? (
            "loading..."
          ) : (
            <>
              {" "}
              <FaUserAlt className="text-gray-100" />
              Create Account{" "}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateStudent;
