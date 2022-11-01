import { createSlice } from "@reduxjs/toolkit";
import { useGetProfile } from "../customHooks/fetchFromAPI";

let initialState = {
  userId: 0,
  fullName: "",
  avatar: {
    small: "",
    large: "",
  },
  aboutMe: "",
  status: "",
  contacts: {
    facebook: "facebook.com",
    website: "",
    vk: "vk.com/",
    twitter: "https://twitter.com/",
    instagram: "instagram.com/",
    youtube: "",
    github: "github.com",
    mainLink: "",
  },
  lookingForAJob: true,
  lookingForAJobDescription: "Ye, I can do thing. Pls, I need money",
  posts: [],
  isFetching: false,
};

const profileReducer = createSlice({
  name: "profileReducer",

  initialState: initialState,

  reducers: {
    setUserID(state, action) {
      state.userId = action.payload;
    },
    setProfileInfo(state, action) {
      state.fullName = action.payload.fullName;
      state.avatar = action.payload.photos;
      state.aboutMe = action.payload.aboutMe;
      state.lookingForAJob = action.payload.lookingForAJob;
      state.lookingForAJobDescription = action.payload.lookingForAJobDescription;
      state.contacts = action.payload.contacts;
    },
    setError(state, action) {
      state.errorMessage = action.payload.data.message;
      state.errorStatus = action.payload.status;
    },
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    toggleProfileIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export default profileReducer.reducer;
export const { setUserID, setProfileInfo, setError, setPosts, setStatus, toggleProfileIsFetching } = profileReducer.actions;

export const getProfileThunk = (id) => {
  return async (dispatch) => {
    dispatch(toggleProfileIsFetching(true));
    try {
      const dataAll = await useGetProfile(id);
      const data = { ...dataAll[1], status: dataAll[0] };
      dispatch(setUserID(data.userId));
      dispatch(
        setProfileInfo(
          data,
          Object.keys(data).forEach((key) => {
            data[key] = data[key] === null ? "" : data[key];
          }),
          Object.keys(data.photos).forEach((key) => {
            data.photos[key] = data.photos[key] === null ? "https://cdn-icons-png.flaticon.com/512/21/21104.png" : data.photos[key];
          }),
          Object.keys(data.contacts).forEach((key) => {
            data.contacts[key] = data.contacts[key] === null ? "" : data.contacts[key];
          })
        )
      );
      dispatch(setStatus(data.status === null ? "" : data.status));
      dispatch(setPosts([]));

      dispatch(toggleProfileIsFetching(false));
    } catch (err) {
      console.error(err);
      dispatch(toggleProfileIsFetching(false));
    }
  };
};
