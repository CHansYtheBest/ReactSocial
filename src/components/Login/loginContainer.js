import { connect } from "react-redux";
import { loginThunk, setLoginErrorActionType } from "../../redux/authReducer";
import Login from "./login";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  loginError: state.auth.loginError,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (obj) => {
      dispatch(loginThunk(obj.email, obj.password, obj.rememberMe));
    },
    clearLoginError: () => {
      dispatch(setLoginErrorActionType(null));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
