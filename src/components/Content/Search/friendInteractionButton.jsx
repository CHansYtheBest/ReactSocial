import React from "react";
import s from "./search.module.css";

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
      <button
        className={`${s.friendButton} ${props.buttonIsFetching.some((id) => id === props.id) ? s.friendButtonFetching : ""}`}
        onClick={() => onFriendInteractionClick(props.followed, props.id)}
        disabled={props.buttonIsFetching.some((id) => id === props.id)}
      >
        {props.followed ? "Remove friend" : "Add friend"}
      </button>
    </>
  );
}
