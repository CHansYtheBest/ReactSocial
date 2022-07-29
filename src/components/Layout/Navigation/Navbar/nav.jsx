import React from "react";
import { NavLink } from "react-router-dom";
import s from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <li>
          <NavLink to="/feed" className={({ isActive }) => (isActive ? s.active : "")} exact>
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialog" className={({ isActive }) => (isActive ? s.active : "")} exact>
            Dialog
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? s.active : "")} exact>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/setings" className={({ isActive }) => (isActive ? s.active : "")} exact>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
