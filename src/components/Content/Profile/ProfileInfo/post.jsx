import React from "react";

function AddPost(props) {
  function onEnterPress(event) {
    if (event.key === "Enter") {
      props.addPost();
    }
  }

  return (
    <div>
      <input onKeyPress={onEnterPress} placeholder="Enter a new post..." value={props.postNewText} onChange={props.onPostChange}></input>
      <button onClick={props.addPost}>Add post</button>
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
  if (props.profilePage.posts.length !== 0) {
    let maxPosts = props.profilePage.posts.length - 1;

    let postsData = React.Children.toArray(
      props.profilePage.posts.map((post) => {
        if (post.id === maxPosts) {
          return <PostNew name={props.profilePage.fullName} content={post.postContent} />;
        } else return <Post name={props.profilePage.fullName} content={post.postContent} />;
      })
    );

    return <>{postsData.reverse()}</>;
  } else {
    return <p>Sadly, {props.profilePage.fullName} didn't write any post!</p>;
  }
}

export function Posts(props) {
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let post = e.target.value;
    props.onPostChange(post);
  };

  return (
    <>
      {props.isLoggedProfile ? <AddPost postNewText={props.profilePage.postNewText} addPost={addPost} onPostChange={onPostChange} /> : ""}
      <SortPosts profilePage={props.profilePage} />
    </>
  );
}
