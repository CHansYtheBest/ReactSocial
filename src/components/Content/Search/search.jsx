import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetUsers from "../../../customHooks/useGetUsers";
import Preloader from "../../Layout/Navigation/Preloader/preloader";
import Pagination from "./pagination";
import s from "./search.module.css";

function Search(props) {
  const id = Number(useParams().id);
  let totalPages = 1;
  useEffect(() => {
    props.toggleIsFetching(true);
    //Check for valid id
    if (isNaN(id) || id === undefined || id < 1) {
      console.warn(id);
      window.location.href = `/search/1`;
    }

    //Check if already has users
    if (props.users.length === 0) {
      //Get users and check if id bigger than totalPages
      useGetUsers(props.count, id).then((data) => {
        props.setUsers(data.items);
        props.setTotalItems(data.totalCount);
        totalPages = Math.ceil(data.totalCount / props.count);
        props.toggleIsFetching(false);
        if (id > totalPages) {
          alert("Id of the page is incorrect, returning to page 1.");
          window.location.href = `/search/1`;
        }
      });
    }
    //Check for valid id
    if (props.currentPage !== id) {
      props.setCurrentPage(Number(id));
    }
  }, []);
  let onFriendInteractionClick = (followed, userId) => {
    if (followed === true) {
      props.removeFriend(userId);
    } else {
      props.addFriend(userId);
    }
  };
  return (
    <>
      <section className={s.content}>
        {props.isFetching ? <Preloader /> : null}
        <div>
          {props.users.map((user) => {
            return (
              <div className={s.userCard} key={user.id}>
                <div className={s.rightSide}>
                  <img src={user.photos.small !== null ? user.photos.small : "https://cdn-icons-png.flaticon.com/512/21/21104.png"} alt="" />
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
        <div className={s.paginationContainer}>
          <Pagination
            currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}
            setUsers={props.setUsers}
            count={props.count}
            toggleIsFetching={props.toggleIsFetching}
            totalPages={Math.ceil(props.totalItems / props.count)}
            id={id}
          />
        </div>
      </section>
    </>
  );
}
export default Search;
