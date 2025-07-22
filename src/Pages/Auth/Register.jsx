import TabTitle from "@/Utils/TabTitle";
import SignIn from "./Partial/SignIn";
import BreadcrumbTab from "@/Utils/BreadcrumbTab";
import SignUp from "./Partial/SignUp";
import { useEffect } from "react";

const Register = () => {
    useEffect(() => {
      scrollTo(0, 0);
    }, []);
  return (
    <div className="max_width">
      <TabTitle title="Register" />
      <BreadcrumbTab menu={[{ name: "Sign In / Register", link: null }]} />
      <div className="flex flex-col-reverse items-start lg:flex-row gap-4">
        <SignUp />
        <SignIn />
      </div>
    </div>
  );
};

export default Register;
