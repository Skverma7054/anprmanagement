import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";
import DashboardLayoutBasic from "../Sidebar/Appbar";
import Appbar from "../Navbar/Appbar";
import SideDrawer from "../Sidebar/SideDrawer";

const Layout = () => {
  return (
    <>
      {/* <DashboardLayoutBasic /> */}
      {/* <Sidebar /> */}
      <SideDrawer />
      <Appbar />
      {/* <Navbar /> */}
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
