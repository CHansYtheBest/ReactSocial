import React from "react";
import { useParams } from "react-router-dom";
import useGetUsers from "../../../customHooks/useGetUsers";
import Pagination from "./pagination";
import s from "./search.module.css";

function Search(props) {
  const id = Number(useParams().id);
  let totalPages = Math.ceil(props.totalItems / props.count);
  if (isNaN(id) || id === undefined) {
    window.location.href = `/search/1`;
  }
  if (id > totalPages || id < 1) {
    alert("Id of the page is incorrect, returning to page 1");
    window.location.href = `/search/1`;
    return;
  }
  if (props.currentPage !== id) {
    props.setCurrentPage(Number(id));
  }
  //Check if already has users
  if (props.users.length === 0) {
    useGetUsers(props.count, id).then((data) => {
      props.setUsers(data.items);
      props.setTotalItems(data.totalCount);
    });
  }

  let onFriendInteractionClick = (followed, userId) => {
    if (followed === true) {
      props.removeFriend(userId);
    } else {
      props.addFriend(userId);
    }
  };

  return (
    <section>
      <div>
        {props.users.map((user) => {
          return (
            <div className={s.userCard} key={user.id}>
              <div className={s.rightSide}>
                <img
                  src={
                    user.photos.small !== null ? user.photos.small : "https://djj.georgia.gov/sites/djj.georgia.gov/files/2020-04/john_edwards2.jpg"
                  }
                  alt=""
                />
                <button onClick={() => onFriendInteractionClick(user.followed, user.id)}>{user.followed ? "Remove friend" : "Add friend"}</button>
              </div>
              <div className={s.leftSide}>
                <div className={s.leftOfLeftSide}>
                  <p className={s.name}>{user.name}</p>
                  <p className={s.about}>{user.status != null ? user.status : "Here could be a status..."}</p>
                  <div className={s.rightOfLeftSide}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Pagination
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
          setUsers={props.setUsers}
          count={props.count}
          totalItems={props.totalItems}
          id={id}
        />
      </div>
    </section>
  );
}
export default Search;
