import { connect } from "react-redux";
import { compose } from "redux";
import { getProfileThunk, toggleProfileIsFetchingAT } from "../../../redux/profileReducer";
import { addPostAT, getMyProfileThunk, setStatusThunk, toggleMyIsFetchingAT } from "../../../redux/authReducer";
import withLoginCheckRedirect from "../../HOC/withLoginCheckRedirect";
import Profile from "./profile";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    auth: state.auth,
    loggedProfileId: state.auth.id,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPostAT(post));
    },
    toggleProfileIsFetching: (bull) => {
      dispatch(toggleProfileIsFetchingAT(bull));
    },
    toggleMyIsFetchingAT: (bull) => {
      dispatch(toggleMyIsFetchingAT(bull));
    },
    getMyProfile: () => {
      dispatch(getMyProfileThunk());
    },
    getProfile: (id) => {
      dispatch(getProfileThunk(id));
    },
    setStatus: (status) => {
      dispatch(setStatusThunk(status));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withLoginCheckRedirect)(Profile);
