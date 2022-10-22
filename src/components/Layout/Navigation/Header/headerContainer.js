import { connect } from "react-redux";
import { logoutThunk } from "../../../../redux/authReducer";
import Header from "./Header";

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
    avatar: state.auth.myProfile.avatar.small,
  };
};

const HeaderContainer = connect(mapStateToProps, { logoutThunk })(Header);

export default HeaderContainer;
