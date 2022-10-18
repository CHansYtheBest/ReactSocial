import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css";

export default function HeaderLogged(props) {
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
          <Link className={s.profilePreview_Link} to={`/profile/${props.id}`}>
            View
          </Link>
        </div>
        <button className={s.profilePreview_Link} onClick={props.logout}>
          Logout
        </button>
      </>
    );
  } else {
    return (
      <>
        <NavLink to="/login">LOGIN</NavLink>
      </>
    );
  }
}
