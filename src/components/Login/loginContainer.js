import { connect } from "react-redux";
import { loginThunk } from "../../redux/authReducer";
import Login from "./login";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (obj) => {
      dispatch(loginThunk(obj.email, obj.password, obj.rememberMe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
