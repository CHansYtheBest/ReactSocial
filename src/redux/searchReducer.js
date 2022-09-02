const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      avatar: "https://uploads.toptal.io/profile_photo/image/user/36433/large_774b6938363c693a18f87fac36670022.jpg",
      name: "Lucijan T.",
      about: "Volim svoj grad!",
      location: { country: "Croatia", city: "Pula" },
      isFriend: false,
    },
    {
      id: 2,
      avatar: "https://djj.georgia.gov/sites/djj.georgia.gov/files/2020-04/john_edwards2.jpg",
      name: "John D.",
      about: "Help, Im lost.",
      location: { country: "USA", city: "Detroit" },
      isFriend: true,
    },
    {
      id: 3,
      avatar: "https://yt3.ggpht.com/jPfJH-udzXh5X9vJJjHRHmvq7RtG7ZYLA6krvfQqepsi03nw0s8Tt5wIWcopH9MhkoOfuMBb=s900-c-k-c0x00ffffff-no-rj",
      name: "Bogdan P.",
      about: "Как тут нормальный язык включить?",
      location: { country: "Moldova", city: "Ungheni" },
      isFriend: false,
    },
    {
      id: 4,
      avatar: "https://m.media-amazon.com/images/I/71pZsv0KPOL._SL1500_.jpg",
      name: "Adelmar B.",
      about: "Ich bin hier, um dich zu verzaubern.",
      location: { country: "Germany", city: "Titting" },
      isFriend: false,
    },
  ],
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
      return { ...state, users: [...state.users, action.users] };
    }
    default: {
      return state;
    }
  }
};

export const addFriendActionType = (userID) => ({ type: FOLLOW, userID: userID });
export const removeFriendActionType = (userID) => ({ type: UNFOLLOW, userID: userID });
export const setUsersActionType = (usersArr) => ({ type: SET_USERS, users: usersArr });
