import { useFriendAdd, useFriendRemove, useGetUsers } from "../customHooks/fetchFromAPI";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  users: [],
  isNoneUsers: null,
  count: 7,
  currentPage: 1,
  totalItems: 1,
  isFetching: false,
  buttonIsFetching: [],
};

const searchReducer = createSlice({
  name: "searchReducer",

  initialState: initialState,

  reducers: {
    addFriend(state, action) {
      state.users = state.users.map((user) => {
        if (user.id === action.payload) {
          return { ...user, followed: true };
        }
        return user;
      });
    },
    removeFriend(state, action) {
      state.users = state.users.map((user) => {
        if (user.id === action.payload) {
          return { ...user, followed: false };
        }
        return user;
      });
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    setTotalItems(state, action) {
      state.totalItems = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    toggleSeachIsFetching(state, action) {
      state.isFetching = action.payload;
    },
    setButtonIsFetching(state, action) {
      state.buttonIsFetching = action.payload.fetching
        ? [...state.buttonIsFetching, action.payload.userID]
        : state.buttonIsFetching.filter((id) => id !== action.payload.userID);
    },
    setIsNoneUsers(state, action) {
      state.isNoneUsers = action.payload;
    },
  },
});

export default searchReducer.reducer;
export const { addFriend, removeFriend, setUsers, setTotalItems, toggleSeachIsFetching, setButtonIsFetching, setIsNoneUsers, setCurrentPage } =
  searchReducer.actions;

export const getUsersThunk = (navigate, id, currentPage, count, onlyFriends) => {
  return async (dispatch) => {
    dispatch(toggleSeachIsFetching(true));
    //Check for valid id
    if (currentPage !== id) {
      dispatch(setCurrentPage(Number(id)));
    }
    //Fetch users
    try {
      const data = await useGetUsers(count, id, onlyFriends);
      let totalPages = Math.ceil(data.totalCount / count);
      console.log(data);
      if (totalPages === 0) {
        dispatch(setIsNoneUsers(true));
        dispatch(toggleSeachIsFetching(false));
      } else {
        dispatch(setIsNoneUsers(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalItems(data.totalCount));
        dispatch(toggleSeachIsFetching(false));
        console.log(id, totalPages);

        //Check if id bigger than totalPages
        if (id > totalPages) {
          navigate("/search/1");
        }
      }
    } catch (err) {
      console.error(err);
      navigate("/search/1");
    }
  };
};

export const removeFriendThunk = (userID) => {
  return async (dispatch) => {
    dispatch(setButtonIsFetching(true, userID));
    const id = await useFriendRemove(userID);
    dispatch(removeFriend(id));
    dispatch(setButtonIsFetching(false, userID));
  };
};

export const addFriendThunk = (userID) => {
  return async (dispatch) => {
    dispatch(setButtonIsFetching(true, userID));
    const id = await useFriendAdd(userID);
    dispatch(addFriend(id));
    dispatch(setButtonIsFetching(false, userID));
  };
};
