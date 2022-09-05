import { connect } from "react-redux";
import {
  addFriendActionType,
  removeFriendActionType,
  setCurrentPageActionType,
  setTotalItemsActionType,
  setUsersActionType,
} from "../../../redux/searchReducer";
import Search from "./search";

let mapStateToProps = (state) => {
  return {
    users: state.searchPage.users,
    count: state.searchPage.count,
    totalItems: state.searchPage.totalItems,
    currentPage: state.searchPage.currentPage,
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
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
