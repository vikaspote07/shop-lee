// src/Layout/Layout.js
import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import { Suspense } from "react";
import LoadingSpinner from "../components/loading spinner/LoadingSpinner ";

function Layout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default Layout;
