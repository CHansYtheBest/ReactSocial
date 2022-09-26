import { connect } from "react-redux";
import useFriendAdd from "../../../customHooks/useFriendAdd";
import useFriendRemove from "../../../customHooks/useFriendRemove";
import {
  addFriendAT,
  removeFriendAT,
  setCurrentPageAT,
  setTotalItemsAT,
  setUsersAT,
  setButtonIsFetchingAT,
  toggleIsFetchingAT,
} from "../../../redux/searchReducer";
import Search from "./search";

let mapStateToProps = (state) => {
  return {
    users: state.searchPage.users,
    count: state.searchPage.count,
    totalItems: state.searchPage.totalItems,
    currentPage: state.searchPage.currentPage,
    isFetching: state.searchPage.isFetching,
    buttonIsFetching: state.searchPage.buttonIsFetching,
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
      dispatch(setButtonIsFetchingAT(true, userId));
      useFriendAdd(userId, (id) => {
        dispatch(addFriendAT(id));
      }).then(() => {
        dispatch(setButtonIsFetchingAT(false, userId));
      });
    },
    removeFriend: (userId) => {
      dispatch(setButtonIsFetchingAT(true, userId));
      useFriendRemove(userId, (id) => {
        dispatch(removeFriendAT(id));
      }).then(() => {
        dispatch(setButtonIsFetchingAT(false, userId));
      });
    },
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
