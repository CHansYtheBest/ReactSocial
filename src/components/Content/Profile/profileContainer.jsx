import { connect } from "react-redux";
import { addPostActionType, updatePostActionType } from "../../../redux/profileReducer";
import Profile from "./profile";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
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
  };
};

const ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileConteiner;
