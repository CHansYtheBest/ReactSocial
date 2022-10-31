import { connect } from "react-redux";
import { compose } from "redux";
import { getProfileThunk } from "../../../redux/profileReducer";
import { addPost, getMyProfileThunk, setStatusThunk } from "../../../redux/authReducer";
import withLoginCheckRedirect from "../../HOC/withLoginCheckRedirect";
import Profile from "./profile";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    auth: state.auth,
    loggedProfileId: state.auth.id,
  };
};

export default compose(connect(mapStateToProps, { addPost, getMyProfileThunk, getProfileThunk, setStatusThunk }), withLoginCheckRedirect)(Profile);
