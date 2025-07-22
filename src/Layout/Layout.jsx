import { Outlet } from "react-router";
// import NavbarMain from "../Shared/Navbar/NavbarMain";
// import NavbarTop from "../Shared/Navbar/NavbarTop";
import NavbarMiddle from "../Shared/Navbar/NavbarMiddle";
import Footer from "../Shared/Footer/Footer";
// import Copyright from "../Shared/Footer/Copyright";


const Layout = () => {
  return (
    <div>
      {/* <NavbarTop /> */}
      <div className="">
        <NavbarMiddle />
        {/* <NavbarMain /> */}
      </div>
      <div className="bg-white dark:bg-dark_color_3 px-2 lg:px-0">
        <Outlet />
      </div>
      {/* <Service /> */}
      <Footer />
   
      {/* <Copyright /> */}
    </div>
  );
};

export default Layout;
