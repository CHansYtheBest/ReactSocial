import React from "react";
import { Post, PostFirst } from "./post";
import s from "./profile.module.css";

function Profile(props) {
  let profileData = props.profileData[0];
  let i = 0;
  let postsData = React.Children.toArray(
    profileData.posts.map((post) => {
      if (i === 0) {
        i++;
        return <PostFirst name={profileData.name + " " + profileData.surname} content={post.postContent} />;
      } else return <Post name={profileData.name + " " + profileData.surname} content={post.postContent} />;
    })
  );

  return (
    <section className={s.content}>
      <div className={s.profile}>
        <img src={profileData.avatar} alt="" />
        <p>
          {profileData.name} {profileData.surname}
        </p>
      </div>

      {postsData}
    </section>
  );
}

export default Profile;
