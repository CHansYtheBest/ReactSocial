import React from "react";
import Post from "./post";
import s from "./profile.module.css";

function Profile(props) {
  return (
    <section className={s.content}>
      <div className={s.profile}>
        <img src={props.avatar} alt="" />
        <p>
          {props.name} {props.surname}
        </p>
      </div>
      <Post name={props.name + " " + props.surname} content={props.post} />
    </section>
  );
}

export default Profile;
