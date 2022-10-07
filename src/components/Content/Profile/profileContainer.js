import { connect } from "react-redux";
import { compose } from "redux";
import {
  addPostAT,
  getProfileThunk,
  setErrorAT,
  setPostsAT,
  setProfileInfoAT,
  setUserIDAT,
  toggleIsFetchingAT,
  updatePostAT,
} from "../../../redux/profileReducer";
import withLoginCheckRedirect from "../../HOC/withLoginCheckRedirect";
import Profile from "./profile";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    loggedProfileId: state.auth.id,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAT());
    },
    onPostChange: (post) => {
      dispatch(updatePostAT(post));
    },
    setUserId: (userId) => {
      dispatch(setUserIDAT(userId));
    },
    setProfileInfo: (data) => {
      dispatch(setProfileInfoAT(data));
    },
    setError: (error) => {
      dispatch(setErrorAT(error));
    },
    setPosts: (posts) => {
      dispatch(setPostsAT(posts));
    },
    toggleIsFetching: (bull) => {
      dispatch(toggleIsFetchingAT(bull));
    },
    getProfile: (navigate, id) => {
      dispatch(getProfileThunk(navigate, id));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withLoginCheckRedirect)(Profile);
