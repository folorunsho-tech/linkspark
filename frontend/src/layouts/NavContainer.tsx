import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const NavContainer = () => {
  return (
    <div className={`flex`}>
      <NavBar />
      <section className="w-full">
        <Header />
        <Outlet />
      </section>
    </div>
  );
};

export default NavContainer;
