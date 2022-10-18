import React from "react";
import s from "./Header.module.css";
import Searchsvg from "../../../../imgs/Search.svg";
import { Link } from "react-router-dom";
import Dialogsvg from "../../../../imgs/Dialog.svg";
import Notificationsvg from "../../../../imgs/Bell.svg";
import HeaderLogged from "./HeaderLogged";

function Header(props) {
  return (
    <header className={s.header}>
      <div className={s.searchbar}>
        <input className={s.searchbar_Input} type="text" placeholder="Search..." /> <img className={s.searchbar_Img} src={Searchsvg} alt="" />
      </div>
      <div className={s.navigation}>
        <Link className={s.iconLink} to="/dialog">
          <img src={Dialogsvg} alt="" />
        </Link>
        <Link className={s.iconLink} to="/notification">
          <img src={Notificationsvg} alt="" />
        </Link>
        <div className={s.profilePreview}>
          <HeaderLogged isAuth={props.auth.isAuth} avatar={props.avatar} id={props.auth.id} login={props.auth.login} logout={props.logout} />
        </div>
      </div>
    </header>
  );
}

export default Header;
