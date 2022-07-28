import React from "react";
import s from "./post.module.css";

function Post(props) {
  return (
    <div>
      <p>New post from {props.name}!</p> <div>{props.content}</div>{" "}
    </div>
  );
}

export default Post;
