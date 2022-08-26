import React from "react";
import { SortPosts } from "./post";
import s from "./profile.module.css";

function Profile(props) {
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let post = e.target.value;
    props.onPostChange(post);
  };

  return (
    <section className={s.content}>
      <div className={s.profile}>
        <img src={props.profilePage.avatar} alt="" />
        <p>
          {props.profilePage.name} {props.profilePage.surname}
        </p>
      </div>

      <div id="posts">
        <SortPosts profilePage={props.profilePage} />
      </div>

      <textarea placeholder="Enter a new post..." value={props.profilePage.postNewText} onChange={onPostChange}></textarea>
      <button onClick={addPost} style={{ width: "100px" }}>
        Add post
      </button>
    </section>
  );
}

export default Profile;
