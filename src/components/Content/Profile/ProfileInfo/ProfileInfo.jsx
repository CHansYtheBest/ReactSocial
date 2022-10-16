import React from "react";
import s from "./../profile.module.css";
import { Posts } from "./post";
import EditebleInfo from "./profileStatus";

export function ProfileInfo(props) {
  let mapLinks = React.Children.toArray(
    Object.keys(props.profilePage.contacts).map((key) => {
      return (
        <p>
          {key.charAt(0).toUpperCase() + key.slice(1) + ":"}
          <a href={`${props.profilePage.contacts[key]}`}> {props.profilePage.contacts[key]}</a>
        </p>
      );
    })
  );
  return (
    <div>
      <div className={s.profile}>
        <div>
          <img src={props.profilePage.avatar} alt="" />
        </div>
        <div>
          <p>{props.profilePage.fullName}</p>
          <br />
        </div>
        <div>
          <EditebleInfo isLoggedProfile={props.isLoggedProfile} setter={props.setStatus} info={props.profilePage.status} />
        </div>
        <div>
          <br />
          <p>About me:</p> <p>{props.profilePage.aboutMe ? props.profilePage.aboutMe : "null"}</p>
        </div>
        <div>
          <br />
          <p>Looking for a job:</p> <p>{props.profilePage.lookingForAJob ? "Yes" : "No"}</p>
        </div>
        <div>
          <p>{props.profilePage.lookingForAJobDescription ? props.profilePage.lookingForAJobDescription : "null"}</p>
        </div>
        <div>
          <br />
          <p>Contacts:</p>
          {mapLinks}
        </div>
      </div>

      <div id="posts">
        <Posts isLoggedProfile={props.isLoggedProfile} profilePage={props.profilePage} addPost={props.addPost} />
      </div>
    </div>
  );
}
