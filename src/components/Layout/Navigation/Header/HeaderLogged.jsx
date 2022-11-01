import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css";

let HeaderLogged = memo((props) => {
  if (props.isAuth === true) {
    return (
      <>
        <Link to={`/profile/${props.id}`}>
          <img className={s.profilePreview_avatar} src={props.avatar} alt="avatar" />
        </Link>
        <div className={s.profilePreview_container}>
          <Link className={s.profilePreview_nameLink} to={`/profile/${props.id}`}>
            {props.login}
          </Link>
          <p className={s.profilePreview_Link} onClick={props.logout}>
            Logout
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <NavLink to="/login">LOGIN</NavLink>
      </>
    );
  }
});
export default HeaderLogged;
