import React from "react";
import { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import s from "./../profile.module.css";

function AddPost(props) {
  const [postNewText, updatePostNewText] = useState("");

  let onPostChange = (e) => {
    updatePostNewText(e.target.value);
  };

  let addPost = () => {
    props.addPost(postNewText);
    updatePostNewText("");
  };

  function onEnterPress(event) {
    if (event.key === "Enter") {
      addPost();
    }
  }

  return (
    <div className={s.inputContainer}>
      <button id="posts" className={`button ${s.postButton}`} onClick={addPost}>
        Add post
      </button>
      <TextareaAutosize
        id="posts"
        className={s.postInput}
        onKeyPress={onEnterPress}
        placeholder="Enter a new post..."
        value={postNewText}
        onChange={onPostChange}
      />
    </div>
  );
}

function SortPosts(props) {
  function Post(props) {
    let dateAndTime = `${props.post.dateOfPost.date}.${props.post.dateOfPost.month}.${props.post.dateOfPost.year} at ${props.post.timeOfPost.hour}:${props.post.timeOfPost.minute}:${props.post.timeOfPost.seconds}`;
    return (
      <div className={s.card}>
        <div className={s.postCardInnerContainer}>
          <p className={s.dateAndTime}>{dateAndTime}</p>
          <div className={s.postName}>
            <img src={props.avatar} className={s.postAvatar} alt="avatar" /> {props.post.id === props.maxPosts ? "Newest post" : "Post"} from
            {props.name}:
          </div>
          <div className={s.postContent}>{props.post.postContent}</div>
        </div>
      </div>
    );
  }

  if (props.profile.posts.length !== 0) {
    let maxPosts = props.profile.posts.length - 1;

    let postsData = React.Children.toArray(
      props.profile.posts.map((post) => {
        return <Post name={props.profile.fullName} avatar={props.profile.avatar.small} post={post} maxPosts={maxPosts} />;
      })
    );

    return (
      <div className={s.postsScrollContainer}>
        <div className={s.postsListContainer}>{postsData.reverse()}</div>{" "}
      </div>
    );
  } else {
    return (
      <div className={s.noPostsContainer}>
        <p className={s.noPosts}>Sadly, {props.profile.fullName} didn't write any posts!</p>
      </div>
    );
  }
}

export function Posts(props) {
  return (
    <>
      {props.isLoggedProfile ? (
        <>
          <h2 className={s.postsName}>{props.profile.fullName}'s posts:</h2>
          <AddPost addPost={props.addPost} />
        </>
      ) : (
        <h2>{props.profile.fullName}'s posts:</h2>
      )}
      <SortPosts profile={props.profile} />
    </>
  );
}
