import { connect } from "react-redux";
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
import Profile from "./profile";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    currentProfileId: state.auth.id,
    isAuth: state.auth.isAuth,
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

const ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileConteiner;
