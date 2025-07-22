import useUser from "@/Hooks/Apis/Users/useUser";
import useAxiosPublic from "@/Hooks/Fetcher/useAxiosPublic";
import { button } from "@/Utils/Class/button";
import { input } from "@/Utils/Class/input";
import LoaderBtn from "@/Utils/Loader/LoaderBtn";
import { setToken } from "@/Utils/SetToken/setToken";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaLockOpen } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [, , userFetch] = useUser();
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      return toast.error('Please verify that you are not a robot.')
    }

    setLoader(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    const info = { email, password };

    try {
      const res = await axiosPublic.post("/api/login", info);
      // if(res.data.status_code === 409) {
      //   toast.error(res.data.message);
      //   setLoader(false);
      // }
      if (res.data.access_token) {
        if (res.data.userData.role === "teacher") {
          setToken(res.data.access_token, "ts_token");
          toast.success(res.data.message);
          e.target.reset();
          userFetch();
          setLoader(false);
          navigate("/teacher/dashboard");
        } else if (res.data.userData.role === "student") {
          setToken(res.data.access_token, "ts_token");
          toast.success(res.data.message);
          e.target.reset();
          userFetch();
          setLoader(false);
          navigate("/student/course");
        }
      }
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="bg-color_4 px-6 py-8 lg:flex-1">
      <h1 className="uppercase text-xl lg:text-2xl font-semibold text-color_2 mb-3">
        already registered ?
      </h1>
      <hr />
      <form onSubmit={handleSubmit} className="mt-3 space-y-4 w-2/3">
        <div className="">
          <label className="font-semibold">
            Email
            <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
          </label>
          <input
            type="email"
            name="email"
            className={input.form}
            placeholder="Type Here"
            required
          />
        </div>
        <div className="relative">
          <label className="font-semibold">
            Password
            <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
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
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
        />
        <button disabled={loader} type="submit" className={button.form}>
          <FaLockOpen className="text-gray-100" />
          {loader ? <LoaderBtn /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
