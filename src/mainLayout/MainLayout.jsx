import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const MainLayout = () => {
  const footerRef = useRef(null);
  return (
    <>
      <div className=" container mx-auto space-y-5 md:p-5 xl:p-0 font-exo-2">
        <Toaster></Toaster>
        <Navbar footerRef={footerRef}></Navbar>
        <div className="min-h-[440px]  container mx-auto p-3 md:px-2 lg:px-0 pb-10">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer footerRef={footerRef}></Footer>
    </>
  );
};

export default MainLayout;
