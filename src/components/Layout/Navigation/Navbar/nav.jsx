import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./nav.module.css";
import Logosvg from "../../../../imgs/Logo.svg";
import Profilesvg from "../../../../imgs/Profile.svg";
import Feedsvg from "../../../../imgs/Feed.svg";
import Dialogsvg from "../../../../imgs/Message.svg";
import Friendsvg from "../../../../imgs/Friends.svg";
import Settingssvg from "../../../../imgs/Settings.svg";
import Copyrightsvg from "../../../../imgs/Copyright.svg";
import Searchsvg from "../../../../imgs/Search.svg";

const MapNavlink = (props) => {
  return (
    <li>
      <NavLink to={props.to} className={({ isActive }) => (isActive ? s.active : "")}>
        <img className={s.navigation_Img} src={props.img} alt="" />
        <p>{props.text}</p>
      </NavLink>
    </li>
  );
};

const Nav = () => {
  return (
    <nav className={s.navigation}>
      <div className={s.navigation_Container}>
        <section className={s.logo}>
          <div className={s.logo_Container}>
            <Link className={s.logo_Link} to="/">
              <img className={s.logo_Img} src={Logosvg} alt="logo" />
              <p className={s.logo_Text}>ReactSocial</p>
            </Link>
            <div className={s.logo_Separator}></div>
          </div>
        </section>
        <ul className={s.navigation_List}>
          <MapNavlink to="/profile" text="My Page" img={Profilesvg} />
          <MapNavlink to="/feed" text="News Feed" img={Feedsvg} />
          <MapNavlink to="/dialog" text="Messages" img={Dialogsvg} />
          <MapNavlink to="/friends/1" text="Friends" img={Friendsvg} />
        </ul>
        <div className={s.navigation_Separator}></div>
        <ul className={s.navigation_List}>
          <MapNavlink to="/search/1" text="Find People" img={Searchsvg} />
          <MapNavlink to="/settings" text="Settings" img={Settingssvg} />
        </ul>
        <section className={s.copyright}>
          <div className={s.copyright_Separator}> </div>
          <div className={s.copyright_Text}>
            <img className={s.copyright_Img} src={Copyrightsvg} alt="" />
            <p>2022 All rights are reserved.</p>
          </div>
          <p>Dybovsky & Chibotaru LLC</p>
        </section>
      </div>
    </nav>
  );
};

export default Nav;
