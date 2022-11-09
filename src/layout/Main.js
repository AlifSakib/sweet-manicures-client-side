import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className=" mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
