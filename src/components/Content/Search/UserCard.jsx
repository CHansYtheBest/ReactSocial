import React from "react";
import { NavLink } from "react-router-dom";
import { FriendInteractionButton } from "./friendInteractionButton";
import s from "./search.module.css";

export function UserCard(props) {
  return (
    <div className={s.userCard}>
      <div className={s.rightSide}>
        <NavLink to={`/profile/${props.user.id}`}>
          <img src={props.user.photos.small !== null ? props.user.photos.small : "https://cdn-icons-png.flaticon.com/512/21/21104.png"} alt="" />
        </NavLink>
        <FriendInteractionButton
          id={props.user.id}
          followed={props.user.followed}
          addFriend={props.addFriend}
          removeFriend={props.removeFriend}
          toggleButtonIsFetching={props.toggleButtonIsFetching}
          buttonIsFetching={props.buttonIsFetching}
        />
      </div>
      <NavLink to={`/profile/${props.user.id}`}>
        <div className={s.leftSide}>
          <div className={s.leftOfLeftSide}>
            <p className={s.name}>{props.user.name}</p>
            <p className={s.about}>{props.user.status}</p>
            <div className={s.rightOfLeftSide}></div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
