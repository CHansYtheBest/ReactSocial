import { connect } from "react-redux";
import {
  addFriendActionType,
  removeFriendActionType,
  setCurrentPageActionType,
  setTotalItemsActionType,
  setUsersActionType,
  toggleIsFetchingActionType,
} from "../../../redux/searchReducer";
import Search from "./search";

let mapStateToProps = (state) => {
  return {
    users: state.searchPage.users,
    count: state.searchPage.count,
    totalItems: state.searchPage.totalItems,
    currentPage: state.searchPage.currentPage,
    isFetching: state.searchPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersActionType(users));
    },
    setTotalItems: (totalItems) => {
      dispatch(setTotalItemsActionType(totalItems));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageActionType(currentPage));
    },
    addFriend: (userId) => {
      dispatch(addFriendActionType(userId));
    },
    removeFriend: (userId) => {
      dispatch(removeFriendActionType(userId));
    },
    toggleIsFetching: (bull) => {
      dispatch(toggleIsFetchingActionType(bull));
    },
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
