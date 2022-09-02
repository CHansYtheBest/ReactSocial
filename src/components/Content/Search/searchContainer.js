import { connect } from "react-redux";
import { addFriendActionType, removeFriendActionType, setUsersActionType } from "../../../redux/searchReducer";
import Search from "./search";

let mapStateToProps = (state) => {
  return {
    users: state.searchPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersActionType(users));
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
