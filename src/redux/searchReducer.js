const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_ITEMS = "SET_TOTAL_ITEMS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_BUTTON_IS_FETCHING = "SET_BUTTON_IS_FETCHING";

let initialState = {
  users: [],
  count: 8,
  currentPage: 1,
  totalItems: 1,
  isFetching: false,
  buttonIsFetching: [2, 3],
};
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_TOTAL_ITEMS: {
      return { ...state, totalItems: action.totalItems };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.fetching };
    }
    case SET_BUTTON_IS_FETCHING: {
      return {
        ...state,
        buttonIsFetching: action.fetching ? [...state.buttonIsFetching, action.userID] : state.buttonIsFetching.filter((id) => id !== action.userID),
      };
    }
    default: {
      return state;
    }
  }
};

export const addFriendAT = (userID) => ({ type: FOLLOW, userID: userID });
export const removeFriendAT = (userID) => ({ type: UNFOLLOW, userID: userID });
export const setUsersAT = (usersArr) => ({ type: SET_USERS, users: usersArr });
export const setTotalItemsAT = (totalItems) => ({ type: SET_TOTAL_ITEMS, totalItems: totalItems });
export const setCurrentPageAT = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const toggleIsFetchingAT = (bull) => ({ type: TOGGLE_IS_FETCHING, fetching: bull });
export const setButtonIsFetchingAT = (bull, userID) => ({ type: SET_BUTTON_IS_FETCHING, fetching: bull, userID: userID });
