import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SortPosts } from "./post";
import s from "./profile.module.css";
import Preloader from "../../Layout/Navigation/Preloader/preloader";

function Profile(props) {
  let navigate = useNavigate();
  let location = useLocation();
  const id = Number(useParams().id);

  useEffect(() => {
    if (!isNaN(id)) {
      props.getProfile(navigate, id);
    } else if (props.isAuth === true) {
      navigate(`/profile/${props.currentProfileId}`);
    } else {
      navigate("/profile/error");
    }
  }, [location]);

  return (
    <section className={s.content}>
      {props.profilePage.isFetching ? <Preloader /> : null}
      <div className={s.profile}>
        <img src={props.profilePage.avatar} alt="" />
        <p>{props.profilePage.fullName}</p>
      </div>

      <div id="posts">
        <SortPosts profilePage={props.profilePage} onPostChange={props.onPostChange} addPost={props.addPost} />
      </div>
    </section>
  );
}

export default Profile;
