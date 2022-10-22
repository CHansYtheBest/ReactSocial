import { connect } from "react-redux";
import { compose } from "redux";
import { getMyProfileThunk, setNewProfileDataThunk, setAvatarThunk } from "../../../redux/authReducer";
import withLoginCheckRedirect from "../../HOC/withLoginCheckRedirect";
import Settings from "./settings";

const mapStateToProps = (state) => ({
  profile: state.auth.myProfile,
  loggedProfileId: state.auth.id,
  isFetching: state.auth.isFetching,
});

export default compose(connect(mapStateToProps, { getMyProfileThunk, setNewProfileDataThunk, setAvatarThunk }), withLoginCheckRedirect)(Settings);
