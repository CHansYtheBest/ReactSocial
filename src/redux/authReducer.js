import { createSlice } from "@reduxjs/toolkit";
import { useCheckIsLoggedIn, useLogin, useLogout, updateAvatar, updateProfile, updateStatus, useGetProfile } from "../customHooks/fetchFromAPI";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: null,
  loginError: null,
  myProfile: {
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
  },
  hasProfileFetched: false,
  hasLoginFetched: false,
  isFetching: false,
};

const authReducer = createSlice({
  name: "authReducer",

  initialState: initialState,

  reducers: {
    setUserData(state, action) {
      let { id, email, login } = action.payload;
      state.id = id;
      state.email = email;
      state.login = login;
    },
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setHasFetchedProfile(state, action) {
      state.hasProfileFetched = action.payload;
    },
    setHasFetchedLogin(state, action) {
      state.hasLoginFetched = action.payload;
    },
    addPost(state, action) {
      let date = new Date();
      let newPost = {
        id: state.myProfile.posts.length,
        dateOfPost: { year: date.getFullYear(), month: date.getMonth() + 1, date: date.getDate() },
        timeOfPost: {
          hour: date.getHours(),
          minute: date.getMinutes().toString().length !== 2 ? `0${date.getMinutes()}` : date.getMinutes(),
          seconds: date.getSeconds().toString().length !== 2 ? `0${date.getSeconds()}` : date.getSeconds(),
        },
        postContent: action.payload,
      };
      state.myProfile.posts.push(newPost);
    },
    setMyProfileInfo(state, action) {
      state.myProfile = {
        ...state.myProfile,
        fullName: action.payload.fullName,
        avatar: action.payload.photos,
        aboutMe: action.payload.aboutMe,
        lookingForAJob: action.payload.lookingForAJob,
        lookingForAJobDescription: action.payload.lookingForAJobDescription,
        contacts: action.payload.contacts,
      };
    },
    setMyPosts(state, action) {
      state.myProfile.posts = action.payload;
    },
    setMyStatus(state, action) {
      state.myProfile.status = action.payload;
    },
    setLoginError(state, action) {
      state.loginError = action.payload;
    },
    toggleMyIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export default authReducer.reducer;
export const {
  setUserData,
  setIsAuth,
  setHasFetchedProfile,
  setHasFetchedLogin,
  addPost,
  setMyProfileInfo,
  setMyPosts,
  setMyStatus,
  setLoginError,
  toggleMyIsFetching,
} = authReducer.actions;

export const getMyProfileThunk = () => {
  return async (dispatch, getState) => {
    let id = getState().auth.id;
    dispatch(toggleMyIsFetching(true));
    try {
      const dataAll = await useGetProfile(id);
      const data = { ...dataAll[1], status: dataAll[0] };
      dispatch(
        setMyProfileInfo(
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
      dispatch(setMyStatus(data.status === null ? "" : data.status));
      dispatch(setMyPosts([]));

      dispatch(toggleMyIsFetching(false));
      dispatch(setHasFetchedProfile(true));
    } catch (err) {
      console.error(err);
      dispatch(toggleMyIsFetching(false));
      dispatch(setHasFetchedProfile(true));
    }
  };
};

export const getLoggedInThunk = () => {
  return async (dispatch) => {
    const data = await useCheckIsLoggedIn();
    console.log(data);
    if (data !== false) {
      dispatch(setUserData(data.data));
      dispatch(setIsAuth(true));
    } else {
      dispatch(setIsAuth(false));
    }
  };
};

export const setNewProfileDataThunk = (jsonObj) => {
  return async (dispatch) => {
    dispatch(toggleMyIsFetching(true));
    try {
      await updateProfile(jsonObj);
      dispatch(getMyProfileThunk());
      dispatch(toggleMyIsFetching(false));
    } catch (err) {
      console.error(err);
      dispatch(toggleMyIsFetching(false));
    }
  };
};

export const setStatusThunk = (status) => {
  return async (dispatch) => {
    dispatch(toggleMyIsFetching(true));
    await updateStatus(status);
    dispatch(setMyStatus(status));
    dispatch(toggleMyIsFetching(false));
  };
};

export const setAvatarThunk = (file) => {
  return async (dispatch, getState) => {
    dispatch(toggleMyIsFetching(true));
    await updateAvatar(file);
    dispatch(getMyProfileThunk(getState().auth.id));
    dispatch(toggleMyIsFetching(false));
  };
};

export const loginThunk = (values) => {
  let { email, password, rememberMe } = values;
  return async (dispatch) => {
    dispatch(setHasFetchedLogin(false));
    const response = await useLogin(email, password, rememberMe);
    dispatch(setHasFetchedLogin(true));
    if (response.data.resultCode === 0) {
      dispatch(getLoggedInThunk());
    } else {
      dispatch(setLoginError(response.data.messages[0]));
    }
  };
};

export const logoutThunk = () => {
  return async (dispatch) => {
    await useLogout();
    dispatch(getLoggedInThunk());
  };
};
