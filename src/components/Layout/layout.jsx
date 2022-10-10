import React from "react";
import { Outlet } from "react-router-dom";
import HeaderContainer from "./Navigation/Header/headerContainer";
import Nav from "./Navigation/Navbar/nav";

const Layout = (props) => {
  return (
    <div className="wrapper">
      <HeaderContainer store={props.store} />
      <Nav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
