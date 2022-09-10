const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_ITEMS = "SET_TOTAL_ITEMS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
  users: [],
  count: 8,
  currentPage: 1,
  totalItems: 1,
  isFetching: false,
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
    default: {
      return state;
    }
  }
};

export const addFriendActionType = (userID) => ({ type: FOLLOW, userID: userID });
export const removeFriendActionType = (userID) => ({ type: UNFOLLOW, userID: userID });
export const setUsersActionType = (usersArr) => ({ type: SET_USERS, users: usersArr });
export const setTotalItemsActionType = (totalItems) => ({ type: SET_TOTAL_ITEMS, totalItems: totalItems });
export const setCurrentPageActionType = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
