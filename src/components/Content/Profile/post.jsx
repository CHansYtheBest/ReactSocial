import React from "react";

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

export function SortPosts(props) {
  let maxPosts = props.profilePage.posts.length - 1;
  let postsData = React.Children.toArray(
    props.profilePage.posts.map((post) => {
      if (post.id === maxPosts) {
        return <PostNew name={props.profilePage.name + " " + props.profilePage.surname} content={post.postContent} />;
      } else return <Post name={props.profilePage.name + " " + props.profilePage.surname} content={post.postContent} />;
    })
  );
  return postsData.reverse();
}
