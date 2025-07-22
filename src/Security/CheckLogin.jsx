/* eslint-disable react/prop-types */
import Loader2 from "@/Utils/Loader/Loader2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxiosSecure from "@/Hooks/Fetcher/useAxiosSecure";

const CheckLogin = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [go, setGo] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("ts_token");

  useEffect(() => {
    if (!token) {
      return navigate("/register");
    } else {
      axiosSecure("/api/profile").then((res) => {
        if (res.data.userData.role === "teacher" || res.data.userData.role === 'student') {
          setGo(true);
          setLoader(false);
        } else {
          setGo(false);
          setLoader(false);
          navigate("/register");
          return;
        }
      });
    }
  }, [token]);

  if (loader) {
    return <Loader2 />;
  }

  return go && children;
};

export default CheckLogin;
