import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import s from "./../profile.module.css";
import { Posts } from "./post";
import EditebleInfo from "./profileStatus";

function LeftBlock(props) {
  return (
    <section className={s.leftBlock}>
      <div className={s.card}>
        <div className={s.innerCard}>
          <img className={s.avatar} src={props.profile.avatar.large} alt="avatar" width="300px" height="300px" />
          <h2 className={s.name}>{props.profile.fullName}</h2>
          <div className={s.status}>
            <EditebleInfo isLoggedProfile={props.isLoggedProfile} setter={props.setStatus} info={props.profile.status} />
          </div>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.innerCard}>
          <h3>About me:</h3>
          <p>{props.profile.aboutMe ? props.profile.aboutMe : "null"}</p>
        </div>
      </div>
    </section>
  );
}

function RightBlock(props) {
  let mapLinks = React.Children.toArray(
    Object.keys(props.profile.contacts).map((key) => {
      return (
        <p>
          {key.charAt(0).toUpperCase() + key.slice(1) + ":"}
          <a href={`${props.profile.contacts[key]}`}> {props.profile.contacts[key]}</a>
        </p>
      );
    })
  );

  return (
    <section className={s.rightBlock}>
      {props.isLoggedProfile ? (
        <NavLink to="/settings" className={`button ${s.editProfileButton}`}>
          Edit profile
        </NavLink>
      ) : null}
      <div className={s.card}>
        <div className={s.innerCard}>
          <h3>Looking for a job:</h3> <p>{props.profile.lookingForAJob ? "✔️" : "❌"}</p>
          <p>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "null"}</p>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.innerCard}>
          <h3>Contacts:</h3>
          {mapLinks}
        </div>
      </div>
    </section>
  );
}

export let ProfileInfo = memo((props) => {
  return (
    <div className={s.profile}>
      <LeftBlock profile={props.profile} isLoggedProfile={props.isLoggedProfile} setStatus={props.setStatus}></LeftBlock>

      <section id="posts" className={s.postsBlock}>
        <Posts isLoggedProfile={props.isLoggedProfile} profile={props.profile} addPost={props.addPost} />
      </section>

      <RightBlock isLoggedProfile={props.isLoggedProfile} profile={props.profile}></RightBlock>
    </div>
  );
});
