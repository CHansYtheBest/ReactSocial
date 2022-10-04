import { connect } from "react-redux";
import { getLoggedInThunk, setUserDataActionType } from "../../../../redux/authReducer";
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
  };
};

const HeaderConteiner = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConteiner;
