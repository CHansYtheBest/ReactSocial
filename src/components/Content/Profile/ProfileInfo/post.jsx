import React from "react";
import { useState } from "react";

function AddPost(props) {
  let [postNewText, updatePostNewText] = useState("");
  let onPostChange = (e) => {
    updatePostNewText(e.target.value);
  };
  let addPost = () => {
    props.addPost(postNewText);
    updatePostNewText("");
  };
  function onEnterPress(event) {
    if (event.key === "Enter") {
      addPost(postNewText);
    }
  }

  return (
    <div>
      <input onKeyPress={onEnterPress} placeholder="Enter a new post..." value={postNewText} onChange={onPostChange}></input>
      <button onClick={addPost}>Add post</button>
    </div>
  );
}

function SortPosts(props) {
  function PostNew(props) {
    return (
      <div>
        <p>New post from {props.name}:</p> <div>{props.content}</div>
      </div>
    );
  }

  function Post(props) {
    return (
      <div>
        <p>{props.name} posted:</p> <div>{props.content}</div>
      </div>
    );
  }

  if (props.profile.posts.length !== 0) {
    let maxPosts = props.profile.posts.length - 1;

    let postsData = React.Children.toArray(
      props.profile.posts.map((post) => {
        if (post.id === maxPosts) {
          return <PostNew name={props.profile.fullName} content={post.postContent} />;
        } else return <Post name={props.profile.fullName} content={post.postContent} />;
      })
    );

    return <>{postsData.reverse()}</>;
  } else {
    return <p>Sadly, {props.profile.fullName} didn't write any posts!</p>;
  }
}

export function Posts(props) {
  return (
    <>
      {props.isLoggedProfile ? <AddPost postNewText={props.profile.postNewText} addPost={props.addPost} /> : ""}
      <SortPosts profile={props.profile} />
    </>
  );
}
