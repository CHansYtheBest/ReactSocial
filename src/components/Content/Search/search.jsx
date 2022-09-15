import React from "react";
import { useEffect } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import useGetUsers from "../../../customHooks/useGetUsers";
import Preloader from "../../Layout/Navigation/Preloader/preloader";
import Pagination from "./pagination";
import s from "./search.module.css";

function Search(props) {
  let navigate = useNavigate();
  let location = useLocation();
  const id = Number(useParams().id);
  let totalPages = 1;

  //Hook activates on component mount and location update
  useEffect(() => {
    if (isNaN(id)) {
      navigate("/search/1");
      //Check if already has users
    } else if (props.users.length === 0) {
      props.toggleIsFetching(true);
      //Check for valid id
      if (props.currentPage !== id) {
        props.setCurrentPage(Number(id));
      }
      //Fetch users
      useGetUsers(props.count, id)
        .then((data) => {
          props.setUsers(data.items);
          props.setTotalItems(data.totalCount);
          props.toggleIsFetching(false);
          totalPages = Math.ceil(data.totalCount / props.count);
          //Check if id bigger than totalPages
          if (id > totalPages) {
            navigate("/search/1");
          }
        })
        .catch((err) => {
          console.error(err);
          navigate("/search/1");
        });
    }
  }, [location]);

  //Add or remove friend button func
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
          {/* Return card for every user */}
          {props.users.map((user) => {
            return (
              <div className={s.userCard} key={user.id}>
                <div className={s.rightSide}>
                  <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small !== null ? user.photos.small : "https://cdn-icons-png.flaticon.com/512/21/21104.png"} alt="" />
                  </NavLink>
                  <button onClick={() => onFriendInteractionClick(user.followed, user.id)}>{user.followed ? "Remove friend" : "Add friend"}</button>
                </div>
                <NavLink to={`/profile/${user.id}`}>
                  <div className={s.leftSide}>
                    <div className={s.leftOfLeftSide}>
                      <p className={s.name}>{user.name}</p>
                      <p className={s.about}>{user.status != null ? user.status : "Here could be a status..."}</p>
                      <div className={s.rightOfLeftSide}></div>
                    </div>
                  </div>
                </NavLink>
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
