import * as axios from "axios";
import React from "react";
import s from "./search.module.css";

function Search(props) {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      props.setUsers(response.data.items);
    });
  }
  console.log(props.users);
  let friendInteraction = (followed, userId) => {
    if (followed === true) {
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
            <img
              src={
                user.photos.small != undefined ? user.photos.small : "https://djj.georgia.gov/sites/djj.georgia.gov/files/2020-04/john_edwards2.jpg"
              }
              alt=""
            />
            <button onClick={() => friendInteraction(user.followed, user.id)}>{user.followed ? "Remove friend" : "Add friend"}</button>
          </div>
          <div className={s.leftSide}>
            <div className={s.leftOfLeftSide}>
              <p className={s.name}>{user.name}</p>
              <p className={s.about}>{user.status != null ? user.status : "Here could be a status..."}</p>
              <div className={s.rightOfLeftSide}>
                {/* <p className={s.country}>{user.location.country}</p>
                <p className={s.city}>{user.location.city}</p> */}
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
