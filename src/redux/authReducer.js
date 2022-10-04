import { useCheckIsLoggedIn } from "../customHooks/fetchFromAPI";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
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
    default: {
      return state;
    }
  }
};

export const setUserDataActionType = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });

export const getLoggedInThunk = () => {
  return (dispatch) => {
    useCheckIsLoggedIn().then((data) => {
      if (data !== false) {
        let { id, email, login } = data.data;
        dispatch(setUserDataActionType(id, email, login));
      }
    });
  };
};
