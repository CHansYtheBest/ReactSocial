import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export default function withLoginCheckRedirect(Component) {
  let LoginCheck = (props) => {
    if (props.isAuth === null) {
      return null;
    } else if (!props.isAuth) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };
  return connect(mapStateToProps, mapDispatchToProps)(LoginCheck);
}
