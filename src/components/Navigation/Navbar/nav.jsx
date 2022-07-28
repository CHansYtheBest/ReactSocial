import React from "react";
import s from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <li>
          <a href="#">Feed</a>
        </li>
        <li>
          <a href="#">Pics</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
