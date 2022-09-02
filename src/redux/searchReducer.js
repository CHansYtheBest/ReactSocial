const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, isFriend: true };
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
            return { ...user, isFriend: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    default: {
      return state;
    }
  }
};

export const addFriendActionType = (userID) => ({ type: FOLLOW, userID: userID });
export const removeFriendActionType = (userID) => ({ type: UNFOLLOW, userID: userID });
export const setUsersActionType = (usersArr) => ({ type: SET_USERS, users: usersArr });
