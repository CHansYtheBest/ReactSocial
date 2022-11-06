import { connect } from "react-redux";
import { loginThunk, setLoginError } from "../../redux/authReducer";
import Login from "./login";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  loginError: state.auth.loginError,
  hasLoginFetched: state.auth.hasLoginFetched,
});

export default connect(mapStateToProps, { loginThunk, setLoginError })(Login);
