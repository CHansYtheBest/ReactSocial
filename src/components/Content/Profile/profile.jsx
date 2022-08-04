import React from "react";
import { Post, PostNew } from "./post";
import s from "./profile.module.css";

function SortPosts(props) {
  let maxPosts = props.profileData.posts.length - 1;
  let postsData = React.Children.toArray(
    props.profileData.posts.map((post) => {
      if (post.id.toString() === maxPosts.toString()) {
        return <PostNew name={props.profileData.name + " " + props.profileData.surname} content={post.postContent} />;
      } else return <Post name={props.profileData.name + " " + props.profileData.surname} content={post.postContent} />;
    })
  );
  return postsData.reverse();
}

function Profile(props) {
  let textRef = React.useRef();

  let addPost = () => {
    let post = textRef.current.value;
    props.addPost(post);
  };

  return (
    <section className={s.content}>
      <div className={s.profile}>
        <img src={props.profileData.avatar} alt="" />
        <p>
          {props.profileData.name} {props.profileData.surname}
        </p>
      </div>

      <div id="posts">
        <SortPosts profileData={props.profileData} />
      </div>

      <textarea ref={textRef}></textarea>
      <button onClick={addPost} style={{ width: "100px" }}>
        Add post
      </button>
    </section>
  );
}

export default Profile;
