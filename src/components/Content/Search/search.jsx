import React from "react";
import { useEffect } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import Preloader from "../../Layout/Navigation/Preloader/preloader";
import { FriendInteractionButton } from "./friendInteractionButton";
import Pagination from "./pagination";
import s from "./search.module.css";

function Search(props) {
  let navigate = useNavigate();
  let location = useLocation();
  const id = Number(useParams().id);

  //Hook activates on component mount and location update
  useEffect(() => {
    if (isNaN(id)) {
      navigate("/search/1");
      //Check if already has users
    } else if (props.users.length === 0) {
      props.getUsers(navigate, id, props.currentPage, props.count);
    }
  }, [location]);

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
                  <FriendInteractionButton
                    id={user.id}
                    followed={user.followed}
                    addFriend={props.addFriend}
                    removeFriend={props.removeFriend}
                    toggleButtonIsFetching={props.toggleButtonIsFetching}
                    buttonIsFetching={props.buttonIsFetching}
                  />
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
            count={props.count}
            totalPages={Math.ceil(props.totalItems / props.count)}
            getUsers={props.getUsers}
          />
        </div>
      </section>
    </>
  );
}
export default Search;
