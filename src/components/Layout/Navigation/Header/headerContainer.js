import { connect } from "react-redux";
import { logoutThunk } from "../../../../redux/authReducer";
import { getProfileThunk } from "../../../../redux/profileReducer";
import Header from "./Header";

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
    avatar: state.profilePage.myAvatar,
  };
};

const HeaderContainer = connect(mapStateToProps, { getProfileThunk, logoutThunk })(Header);

export default HeaderContainer;
