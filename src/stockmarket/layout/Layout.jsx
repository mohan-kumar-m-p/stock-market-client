import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarWithSearch } from "./Navbar";

function Layout() {
  return (
    <div className="bg-background" >
      <NavbarWithSearch />
      <div className="py-1 px-2">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
