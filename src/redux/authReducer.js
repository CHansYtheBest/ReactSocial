import { useCheckIsLoggedIn } from "../customHooks/fetchFromAPI";

const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_AUTH = "SET_IS_AUTH";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: null,
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
    default: {
      return state;
    }
  }
};

export const setUserDataActionType = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const setIsAuthActionType = (bull) => ({ type: SET_IS_AUTH, isAuth: bull });

export const getLoggedInThunk = () => {
  return (dispatch) => {
    useCheckIsLoggedIn().then((data) => {
      if (data !== false) {
        let { id, email, login } = data.data;
        dispatch(setUserDataActionType(id, email, login));
      } else {
        dispatch(setIsAuthActionType(false));
      }
    });
  };
};
