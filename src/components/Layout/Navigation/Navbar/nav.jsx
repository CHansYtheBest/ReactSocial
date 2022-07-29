import React from "react";
import { NavLink } from "react-router-dom";
import s from "./nav.module.css";

const Navlining = (props) => {
  return (
    <li>
      <NavLink to={props.to} className={({ isActive }) => (isActive ? s.active : "")}>
        {props.text}
      </NavLink>
    </li>
  );
};

const Nav = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <Navlining to="/feed" text="Feed" />
        <Navlining to="/dialog" text="Dialog" />
        <Navlining to="/profile" text="Profile" />
        <Navlining to="/setings" text="Settings" />
      </ul>
    </nav>
  );
};

export default Nav;
