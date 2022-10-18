import { connect } from "react-redux";
import { compose } from "redux";
import { getProfileThunk, setNewProfileDataThunk, setAvatarThunk } from "../../../redux/profileReducer";
import withLoginCheckRedirect from "../../HOC/withLoginCheckRedirect";
import Settings from "./settings";

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  loggedProfileId: state.auth.id,
});

export default compose(connect(mapStateToProps, { getProfileThunk, setNewProfileDataThunk, setAvatarThunk }), withLoginCheckRedirect)(Settings);
