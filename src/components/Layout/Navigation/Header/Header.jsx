import React from "react";
import s from "./Header.module.css";
import Searchsvf from "../../../../imgs/Search.svg";
import { Link } from "react-router-dom";
import Dialogsvg from "../../../../imgs/Dialog.svg";
import Notificationsvg from "../../../../imgs/Bell.svg";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.searchbar}>
        <input className={s.searchbar_Input} type="text" placeholder="Search..." /> <img className={s.searchbar_Img} src={Searchsvf} alt="" />
      </div>
      <div className={s.navigation}>
        <Link className={s.iconLink} to="/dialog">
          <img src={Dialogsvg} alt="" />
        </Link>
        <Link className={s.iconLink} to="/notification">
          <img src={Notificationsvg} alt="" />
        </Link>
        <div className={s.profilePreview}>
          <Link to="/profile">
            <img className={s.profilePreview_avatar} src={props.profileData.avatar} alt="avatar" />
          </Link>
          <div className={s.profilePreview_container}>
            <Link className={s.profilePreview_nameLink} to="/profile">
              {props.profileData.name} {props.profileData.surname}
            </Link>
            <Link className={s.profilePreview_Link} to="/profile">
              View
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
