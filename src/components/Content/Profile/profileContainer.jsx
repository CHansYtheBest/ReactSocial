import React from "react";
import { addPostActionType, updatePostActionType } from "../../../redux/profileReducer";
import Profile from "./profile";

function ProfileConteiner(props) {
  let addPost = () => {
    props.store.dispatch(addPostActionType());
  };

  let onPostChange = (post) => {
    props.store.dispatch(updatePostActionType(post));
  };

  return <Profile addPost={addPost} onPostChange={onPostChange} profilePage={props.store.getState().profilePage} />;
}

export default ProfileConteiner;
