import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Navigation/Header/Header";
import Nav from "./Navigation/Navbar/nav";

const Layout = (props) => {
  return (
    <div className="wrapper">
      <Header profilePage={props.profilePage} />
      <Nav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
