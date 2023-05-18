import React from "react";
import Navbar from "../components/Navbar";
import Main from "./Main";
import { Outlet } from "react-router-dom";

const Header404Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Header404Layout;
