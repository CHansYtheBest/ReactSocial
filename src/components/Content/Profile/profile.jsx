import React, { memo } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
        props.getMyProfileThunk();
      } else {
        props.getProfileThunk(id);
      }
    } else if (props.auth.isAuth === true) {
      navigate(`/profile/${props.loggedProfileId}`);
    } else {
      navigate("/profile/error");
    }
  }, [id]);

  return (
    <section className={s.content}>
      {props.profilePage.isFetching || props.auth.isFetching ? (
        <Preloader />
      ) : (
        <>
          {isLoggedProfile ? (
            <>
              <ProfileInfo isLoggedProfile={isLoggedProfile} profile={props.auth.myProfile} addPost={props.addPost} setStatus={props.setStatus} />
            </>
          ) : (
            <ProfileInfo isLoggedProfile={isLoggedProfile} profile={props.profilePage} />
          )}
        </>
      )}
    </section>
  );
});

export default Profile;
