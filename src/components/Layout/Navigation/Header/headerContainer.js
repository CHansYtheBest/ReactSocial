import { connect } from "react-redux";
import { getLoggedInThunk, logoutThunk, setUserDataActionType } from "../../../../redux/authReducer";
import Header from "./Header";

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (id, email, login) => {
      dispatch(setUserDataActionType(id, email, login));
    },
    getLoggedIn: () => {
      dispatch(getLoggedInThunk());
    },
    logout: () => {
      dispatch(logoutThunk());
    },
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
