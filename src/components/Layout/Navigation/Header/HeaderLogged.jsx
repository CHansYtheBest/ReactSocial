import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

export default function HeaderLogged(props) {
  if (props.isAuth === true) {
    return (
      <>
        <Link to={`/profile/${props.id}`}>
          <img className={s.profilePreview_avatar} src={"https://cdn-icons-png.flaticon.com/512/21/21104.png"} alt="avatar" />
        </Link>
        <div className={s.profilePreview_container}>
          <Link className={s.profilePreview_nameLink} to={`/profile/${props.id}`}>
            {props.login}
          </Link>
          <Link className={s.profilePreview_Link} to={`/profile/${props.id}`}>
            View
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>LOGIN</div>
      </>
    );
  }
}
