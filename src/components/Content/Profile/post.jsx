import React from "react";
import s from "./post.module.css";

function PostFirst(props) {
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

export { Post, PostFirst };
