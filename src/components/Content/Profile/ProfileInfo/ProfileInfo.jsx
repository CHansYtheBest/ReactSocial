import React from "react";
import s from "./../profile.module.css";
import { Posts } from "./post";
import ProfileStatus from "./profileStatus";

export function ProfileInfo(props) {
  return (
    <div>
      <div className={s.profile}>
        <div>
          <img src={props.profilePage.avatar} alt="" />
        </div>
        <div>
          <p>{props.profilePage.fullName}</p>
        </div>
        <div>
          <ProfileStatus isLoggedProfile={props.isLoggedProfile} setStatus={props.setStatus} status={props.profilePage.status} />
        </div>
      </div>

      <div id="posts">
        <Posts isLoggedProfile={props.isLoggedProfile} profilePage={props.profilePage} addPost={props.addPost} />
      </div>
    </div>
  );
}
