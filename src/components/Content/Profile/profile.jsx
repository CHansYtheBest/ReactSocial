import React, { memo } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import s from "./profile.module.css";
import Preloader from "../../Layout/Navigation/Preloader/preloader";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

let Profile = memo((props) => {
  let navigate = useNavigate();
  const id = Number(useParams().id);
  let isLoggedProfile = id === props.loggedProfileId;

  useEffect(() => {
    if (!isNaN(id)) {
      if (isLoggedProfile) {
        props.getMyProfile();
      } else {
        props.getProfile(id);
      }
    } else if (props.auth.isAuth === true) {
      navigate(`/profile/${props.loggedProfileId}`);
    } else {
      navigate("/profile/error");
    }
  }, [id]);

  function ShowProfile() {
    return isLoggedProfile ? (
      <>
        <NavLink to="/settings">Settings</NavLink>
        <ProfileInfo isLoggedProfile={isLoggedProfile} profile={props.auth.myProfile} addPost={props.addPost} setStatus={props.setStatus} />
      </>
    ) : (
      <ProfileInfo isLoggedProfile={isLoggedProfile} profile={props.profilePage} />
    );
  }

  return <section className={s.content}>{props.profilePage.isFetching || props.auth.isFetching ? <Preloader /> : <ShowProfile />}</section>;
});

export default Profile;
