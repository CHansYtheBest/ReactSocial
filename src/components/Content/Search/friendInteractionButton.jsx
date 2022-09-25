import React from "react";

export function FriendInteractionButton(props) {
  let onFriendInteractionClick = (followed, userId) => {
    if (followed === true) {
      props.removeFriend(userId);
    } else {
      props.addFriend(userId);
    }
  };

  return (
    <>
      <button onClick={() => onFriendInteractionClick(props.followed, props.id)}>{props.followed ? "Remove friend" : "Add friend"}</button>
    </>
  );
}
