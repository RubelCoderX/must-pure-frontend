import { button } from "@/Utils/Class/button";
import { input } from "@/Utils/Class/input";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "@/Hooks/Fetcher/useAxiosSecure";

const UpdateTeacher = () => {
  const axiosSecure = useAxiosSecure();
  const [loader, setLoader] = useState(false);
  const {state} = useLocation();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const firstName = e.target.firstName.value;
    const teacher_name = firstName;
    const teacher_id = e.target.teacher_id.value;
    const teacher_email = e.target.email.value;
    const teacher_phone = e.target.phone.value;
    const gender = e.target?.gender?.value || null;
    const date_of_birth = e.target.phone.value;
    const address = e.target.phone.value;
    const course_1 = e.target.course_1.value;
    const course_2 = e.target.course_2.value;
    const course_3 = e.target.course_3.value;
    const facebook_link = e.target.facebook_link.value;
    const designation = e.target.designation.value;
    const youtube_link = e.target.youtube_link.value;
    const photo = e.target?.photo?.files[0] || null;

    const formData = new FormData();
    formData.append("user_id", state.id);
    formData.append("teacher_name", teacher_name);
    formData.append("teacher_email", teacher_email);
    formData.append("teacher_phone", teacher_phone);
    formData.append("teacher_id", teacher_id);
    gender && formData.append("gender", gender);
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
      const res = await axiosSecure.post("/api/profile/update", formData);
      if (res.data.message) {
        toast.success(res.data.message);
        setLoader(false);
        navigate('/teacher/profile')
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="lg:flex-1">
      <h1 className="uppercase text-lg lg:text-xl font-semibold text-color_2 mb-3">
        Update your profile
      </h1>
      <hr />
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
                defaultValue={state.userData.teacher_name}
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
                defaultValue={state.userData.teacher_email}
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
                defaultValue={state.userData.teacher_phone}
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
              <select defaultValue={state.userData.gender} required name="gender" className={`${input.form}`} id="">
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
                defaultValue={state.userData.course_1}
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
                defaultValue={state.userData.course_2}
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
                defaultValue={state.userData.course_3}
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
                defaultValue={state.userData.youtube_link}
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
                defaultValue={state.userData.facebook_link}
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
                disabled
                defaultValue={state.userData.teacher_id}
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
                defaultValue={state.userData.designation}
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
            className={`${button.form}`}
          >
            {loader ? (
              "loading..."
            ) : (
              <>
                <FaUserAlt className="text-gray-100" />
                Update Account
              </>
            )}
          </button>
        </form>
    </div>
  );
};

export default UpdateTeacher;
