import React from "react";
import s from "./search.module.css";

function Search(props) {
  let friendInteraction = (isFriend, userId) => {
    if (isFriend === true) {
      props.removeFriend(userId);
    } else {
      props.addFriend(userId);
    }
  };

  let usersArr = React.Children.toArray(
    props.users.map((user) => {
      return (
        <div className={s.userCard}>
          <div className={s.rightSide}>
            <img src={user.avatar} alt="" />
            <button onClick={() => friendInteraction(user.isFriend, user.id)}>{user.isFriend ? "Remove friend" : "Add friend"}</button>
          </div>
          <div className={s.leftSide}>
            <div className={s.leftOfLeftSide}>
              <p className={s.name}>{user.name}</p>
              <p className={s.about}>{user.about}</p>
              <div className={s.rightOfLeftSide}>
                <p className={s.country}>{user.location.country}</p>
                <p className={s.city}>{user.location.city}</p>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );

  return <section>{usersArr}</section>;
}

export default Search;
