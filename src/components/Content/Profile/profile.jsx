import React, { memo } from "react";
import { useEffect } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import s from "./profile.module.css";
import Preloader from "../../Layout/Navigation/Preloader/preloader";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

let Profile = memo((props) => {
  let navigate = useNavigate();
  let location = useLocation();
  const id = Number(useParams().id);

  useEffect(() => {
    if (!isNaN(id)) {
      props.getProfile(id);
    } else if (props.isAuth === true) {
      navigate(`/profile/${props.loggedProfileId}`);
    } else {
      navigate("/profile/error");
    }
  }, [location]);

  return (
    <section className={s.content}>
      {props.profilePage.isFetching ? <Preloader /> : null}
      <NavLink to="/settings">Settings</NavLink>
      <ProfileInfo
        isLoggedProfile={id === props.loggedProfileId}
        profilePage={props.profilePage}
        addPost={props.addPost}
        setStatus={props.setStatus}
      ></ProfileInfo>
    </section>
  );
});

export default Profile;
