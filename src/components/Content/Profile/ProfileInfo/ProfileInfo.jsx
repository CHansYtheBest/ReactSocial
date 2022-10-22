import React, { memo } from "react";
import s from "./../profile.module.css";
import { Posts } from "./post";
import EditebleInfo from "./profileStatus";

export let ProfileInfo = memo((props) => {
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
    <div>
      <div className={s.profile}>
        <div>
          <img src={props.profile.avatar.large} alt="avatar" width="300px" height="300px" />
        </div>
        <div>
          <p>{props.profile.fullName}</p>
          <br />
        </div>
        <div>
          <EditebleInfo isLoggedProfile={props.isLoggedProfile} setter={props.setStatus} info={props.profile.status} />
        </div>
        <div>
          <br />
          <p>About me:</p> <p>{props.profile.aboutMe ? props.profile.aboutMe : "null"}</p>
        </div>
        <div>
          <br />
          <p>Looking for a job:</p> <p>{props.profile.lookingForAJob ? "Yes" : "No"}</p>
        </div>
        <div>
          <p>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "null"}</p>
        </div>
        <div>
          <br />
          <p>Contacts:</p>
          {mapLinks}
        </div>
      </div>

      <div id="posts">
        <Posts isLoggedProfile={props.isLoggedProfile} profile={props.profile} addPost={props.addPost} />
      </div>
    </div>
  );
});
