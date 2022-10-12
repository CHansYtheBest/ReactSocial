import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Preloader from "../../Layout/Navigation/Preloader/preloader";
import Pagination from "./pagination";
import s from "./search.module.css";
import { UserCard } from "./UserCard";

function Search(props) {
  let navigate = useNavigate();
  let location = useLocation();
  let currentLocation = location.pathname.split("/")[1];
  const id = Number(useParams().id);

  //Hook activates on component mount and location update
  useEffect(() => {
    if (isNaN(id)) {
      navigate(`/${currentLocation}/1`);
      //Check if already has users
    } else if (props.users.length === 0 || props.currentPage !== id || location.pathname) {
      props.getUsers(navigate, id, props.currentPage, props.count, props.onlyFriends);
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
              <UserCard
                key={user.id}
                addFriend={props.addFriend}
                removeFriend={props.removeFriend}
                toggleButtonIsFetching={props.toggleButtonIsFetching}
                buttonIsFetching={props.buttonIsFetching}
                user={user}
              ></UserCard>
            );
          })}
        </div>
        <div className={s.paginationContainer}>
          <Pagination currentPage={props.currentPage} currentLocation={currentLocation} totalPages={Math.ceil(props.totalItems / props.count)} />
        </div>
      </section>
    </>
  );
}
export default Search;
