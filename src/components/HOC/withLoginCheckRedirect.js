import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { getLoggedInThunk } from "../../redux/authReducer";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getLoggedIn: () => {
      dispatch(getLoggedInThunk());
    },
  };
};

export default function withLoginCheckRedirect(Component) {
  let LoginCheck = (props) => {
    useEffect(() => {
      props.getLoggedIn();
    }, []);
    if (props.isAuth === null) {
      return null;
    } else if (!props.isAuth) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };
  return connect(mapStateToProps, mapDispatchToProps)(LoginCheck);
}
