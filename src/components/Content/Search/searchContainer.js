import { connect } from "react-redux";

import {
  setCurrentPageAT,
  setTotalItemsAT,
  setUsersAT,
  toggleIsFetchingAT,
  getUsersThunk,
  removeFriendThunk,
  addFriendThunk,
} from "../../../redux/searchReducer";
import Search from "./search";

let mapStateToProps = (state, ownProps) => {
  return {
    users: state.searchPage.users,
    count: state.searchPage.count,
    totalItems: state.searchPage.totalItems,
    currentPage: state.searchPage.currentPage,
    isFetching: state.searchPage.isFetching,
    buttonIsFetching: state.searchPage.buttonIsFetching,
    onlyFriends: ownProps.onlyFriends,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersAT(users));
    },
    setTotalItems: (totalItems) => {
      dispatch(setTotalItemsAT(totalItems));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAT(currentPage));
    },
    toggleIsFetching: (bull) => {
      dispatch(toggleIsFetchingAT(bull));
    },
    addFriend: (userId) => {
      dispatch(addFriendThunk(userId));
    },
    removeFriend: (userId) => {
      dispatch(removeFriendThunk(userId));
    },
    getUsers: (navigate, id, currentPage, count, onlyFriends) => {
      dispatch(getUsersThunk(navigate, id, currentPage, count, onlyFriends));
    },
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
