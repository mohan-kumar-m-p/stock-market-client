import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useEffect } from "react";

function Layout() {
  const navigate =  useNavigate();
  useEffect(()=>{
    navigate('/home');
  },[]);
  return (
    <div className="bg-background" >
      <Navbar />
      <div className="py-1 px-2">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
