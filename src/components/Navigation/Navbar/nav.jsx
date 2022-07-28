import React from "react";
import s from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <li>Main</li>
        <li>Pics</li>
        <li>Feet</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};

export default Nav;
