import React from "react";
import { useEffect } from "react";
import { useChangeUsersPage, useGetUsersToState } from "../../../customHooks/useGetUsersToState";
import s from "./search.module.css";

function Search(props) {
  window.history.pushState(null, null, "#" + props.currentPage);
  if (props.users.length === 0) {
    useGetUsersToState(props.setUsers, props.setTotalItems, props.count);
  }

  let onFriendInteractionClick = (followed, userId) => {
    console.log(followed);
    if (followed === true) {
      props.removeFriend(userId);
    } else {
      props.addFriend(userId);
    }
  };

  let onPageButtonClick = (page) => {
    useChangeUsersPage(props.setUsers, props.count, page);
    props.setCurrentPage(page);
  };

  let totalPages = Math.ceil(props.totalItems / props.count);
  let pagesArr = [];
  for (let i = 0; i <= totalPages; i++) {
    pagesArr.push(i);
  }

  let currentPageFirst = props.currentPage - 5 < 0 ? 0 : props.currentPage - 5;
  let currentPageLast = props.currentPage + 5;
  let slicedPagesArr = pagesArr.slice(currentPageFirst, currentPageLast);
  let pagesButtons = React.Children.toArray(
    slicedPagesArr.map((page) => {
      return <button onClick={() => onPageButtonClick(page)}> {page}</button>;
    })
  );

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
            <button onClick={() => onFriendInteractionClick(user.followed, user.id)}>{user.followed ? "Remove friend" : "Add friend"}</button>
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

  return (
    <section>
      <div>{usersArr}</div>
      <div>{pagesButtons}</div>
    </section>
  );
}
export default Search;
