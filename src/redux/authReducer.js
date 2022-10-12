import { useCheckIsLoggedIn, useLogin, useLogout } from "../customHooks/fetchFromAPI";

const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_AUTH = "SET_IS_AUTH";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: null,
  loginError: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    case SET_IS_AUTH: {
      return {
        ...state,
        isAuth: action.isAuth,
      };
    }
    case SET_LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.loginError,
      };
    }
    default: {
      return state;
    }
  }
};

export const setUserDataActionType = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const setIsAuthActionType = (bull) => ({ type: SET_IS_AUTH, isAuth: bull });
export const setLoginErrorActionType = (loginError) => ({ type: SET_LOGIN_ERROR, loginError: loginError });

export const getLoggedInThunk = () => {
  return (dispatch) => {
    useCheckIsLoggedIn().then((data) => {
      if (data !== false) {
        let { id, email, login } = data.data;
        dispatch(setUserDataActionType(id, email, login));
        dispatch(setIsAuthActionType(true));
      } else {
        dispatch(setIsAuthActionType(false));
      }
    });
  };
};

export const loginThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    useLogin(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getLoggedInThunk());
      } else {
        dispatch(setLoginErrorActionType(response.data.messages[0]));
      }
    });
  };
};

export const logoutThunk = () => {
  return (dispatch) => {
    useLogout().then((response) => {
      dispatch(getLoggedInThunk());
    });
  };
};
