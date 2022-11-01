import { connect } from "react-redux";

import {
  setCurrentPage,
  setTotalItems,
  setUsers,
  toggleSeachIsFetching,
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
    isNoneUsers: state.searchPage.isNoneUsers,
    onlyFriends: ownProps.onlyFriends,
  };
};

const SearchContainer = connect(mapStateToProps, {
  setUsers,
  setTotalItems,
  setCurrentPage,
  toggleSeachIsFetching,
  addFriendThunk,
  removeFriendThunk,
  getUsersThunk,
})(Search);

export default SearchContainer;
