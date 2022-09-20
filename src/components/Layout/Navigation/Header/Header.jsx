import React from "react";
import s from "./Header.module.css";
import Searchsvg from "../../../../imgs/Search.svg";
import { Link } from "react-router-dom";
import Dialogsvg from "../../../../imgs/Dialog.svg";
import Notificationsvg from "../../../../imgs/Bell.svg";
import { useEffect } from "react";
import useCheckIsLoggedIn from "../../../../customHooks/useCheckIsLoggedIn";
import HeaderLogged from "./HeaderLogged";

const getLoginInfo = (props) => {
  return useCheckIsLoggedIn().then((data) => {
    if (data !== false) {
      let { id, email, login } = data.data;
      props.setUserData(id, email, login);
      return true;
    }
  });
};

function Header(props) {
  useEffect(() => {
    getLoginInfo(props);
  }, []);
  console.log(props.auth.isAuth);
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
        <div className={s.profilePreview}>{props.auth.isAuth ? <HeaderLogged id={props.auth.id} login={props.auth.login} /> : null}</div>
      </div>
    </header>
  );
}

export default Header;
