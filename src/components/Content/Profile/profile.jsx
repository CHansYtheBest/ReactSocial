import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SortPosts } from "./post";
import useGetProfile from "../../../customHooks/useGetProfile";
import s from "./profile.module.css";
import Preloader from "../../Layout/Navigation/Preloader/preloader";

const getProfile = (props, navigate, id) => {
  props.toggleIsFetching(true);
  useGetProfile(id)
    .then((data) => {
      props.setUserId(data.userId);
      if (data.photos.large !== null) {
        props.setProfileInfo(data);
      } else {
        props.setProfileInfo(data, (data.photos.large = "https://cdn-icons-png.flaticon.com/512/21/21104.png"));
      }
      props.setPosts([]);
      props.toggleIsFetching(false);
    })
    .catch((err) => {
      console.error(err);
      navigate("/profile/error");
    });
};

function Profile(props) {
  let navigate = useNavigate();
  let location = useLocation();
  const id = Number(useParams().id);
  useEffect(() => {
    if (!isNaN(id)) {
      getProfile(props, navigate, id);
    } else {
      navigate(`/profile/${props.currentProfileId}`);
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
