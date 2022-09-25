import { connect } from "react-redux";
import {
  addPostActionType,
  setErrorActionType,
  setPostsActionType,
  setProfileInfoActionType,
  setUserIDActionType,
  toggleIsFetchingActionType,
  updatePostActionType,
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
      dispatch(addPostActionType());
    },
    onPostChange: (post) => {
      dispatch(updatePostActionType(post));
    },
    setUserId: (userId) => {
      dispatch(setUserIDActionType(userId));
    },
    setProfileInfo: (data) => {
      dispatch(setProfileInfoActionType(data));
    },
    setError: (error) => {
      dispatch(setErrorActionType(error));
    },
    setPosts: (posts) => {
      dispatch(setPostsActionType(posts));
    },
    toggleIsFetching: (bull) => {
      dispatch(toggleIsFetchingActionType(bull));
    },
  };
};

const ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileConteiner;
