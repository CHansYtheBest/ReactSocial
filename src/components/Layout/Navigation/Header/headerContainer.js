import { connect } from "react-redux";
import { setUserDataActionType } from "../../../../redux/authReducer";
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
  };
};

const HeaderConteiner = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConteiner;
