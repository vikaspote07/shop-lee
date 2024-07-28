import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Layout;
