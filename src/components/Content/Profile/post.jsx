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
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let post = e.target.value;
    props.onPostChange(post);
  };

  if (props.profilePage.posts.length !== 0) {
    let maxPosts = props.profilePage.posts.length - 1;
    let postsData = React.Children.toArray(
      props.profilePage.posts.map((post) => {
        if (post.id === maxPosts) {
          return <PostNew name={props.profilePage.fullName} content={post.postContent} />;
        } else return <Post name={props.profilePage.fullName} content={post.postContent} />;
      })
    );

    return (
      <>
        {postsData.reverse()}
        <textarea placeholder="Enter a new post..." value={props.profilePage.postNewText} onChange={onPostChange}></textarea>
        <button onClick={addPost} style={{ width: "100px" }}>
          Add post
        </button>
      </>
    );
  } else {
    return <p>Sadly, {props.profilePage.fullName} didn't write any post!</p>;
  }
}
