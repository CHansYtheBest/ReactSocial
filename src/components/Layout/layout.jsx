import React from "react";
import { Outlet } from "react-router-dom";
import HeaderConteiner from "./Navigation/Header/headerContainer";
import Nav from "./Navigation/Navbar/nav";

const Layout = (props) => {
  return (
    <div className="wrapper">
      <HeaderConteiner store={props.store} />
      <Nav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
