import { useCheckIsLoggedIn, useLogin, useLogout, updateAvatar, updateProfile, updateStatus, useGetProfile } from "../customHooks/fetchFromAPI";

const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_AUTH = "SET_IS_AUTH";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const ADD_POST = "ADD-POST";
const SET_ALL_MY_PROFILE_INFO = "SET_ALL_MY_PROFILE_INFO";
const SET_ERROR = "SET_ERROR";
const SET_MY_POSTS = "SET_MY_POSTS";
const TOGGLE_MY_IS_FETCHING = "TOGGLE_MY_IS_FETCHING";
const SET_MY_STATUS = "SET_MY_STATUS";
const SET_AVATAR = "SET_AVATAR";
const HAS_FETCHED_PROFILE = "HAS_FETCHED_PROFILE";

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
  hasFetched: false,
  isFetching: false,
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
    case HAS_FETCHED_PROFILE: {
      return {
        ...state,
        hasFetched: action.bull,
      };
    }
    case SET_LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.loginError,
      };
    }
    case ADD_POST: {
      let newPost = {
        id: state.posts.length,
        postContent: action.post,
      };

      return {
        ...state,
        myProfile: { ...state.myProfile, posts: [...state.posts, newPost] },
      };
    }
    case SET_ALL_MY_PROFILE_INFO: {
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          fullName: action.data.fullName,
          avatar: action.data.photos,
          aboutMe: action.data.aboutMe,
          lookingForAJob: action.data.lookingForAJob,
          lookingForAJobDescription: action.data.lookingForAJobDescription,
          contacts: action.data.contacts,
        },
      };
    }
    case SET_ERROR: {
      return { ...state, errorMessage: action.error.data.message, errorStatus: action.error.status };
    }
    case SET_MY_POSTS: {
      return { ...state, myProfile: { ...state.myProfile, posts: action.posts } };
    }
    case SET_MY_STATUS: {
      return { ...state, myProfile: { ...state.myProfile, status: action.status } };
    }
    case SET_AVATAR: {
      return { ...state, avatar: action.avatar };
    }
    case TOGGLE_MY_IS_FETCHING: {
      return { ...state, isFetching: action.value };
    }
    default: {
      return state;
    }
  }
};

export const setUserDataActionType = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const setIsAuthActionType = (bull) => ({ type: SET_IS_AUTH, isAuth: bull });
export const setLoginErrorActionType = (loginError) => ({ type: SET_LOGIN_ERROR, loginError: loginError });
export const setMyAvatarAT = (avatar) => ({ type: SET_AVATAR, avatar: avatar });
export const setMyProfileInfoAT = (data) => ({ type: SET_ALL_MY_PROFILE_INFO, data: data });
export const setErrorAT = (error) => ({ type: SET_ERROR, error: error });
export const setPostsAT = (posts) => ({ type: SET_MY_POSTS, posts: posts });
export const addPostAT = (post) => ({ type: ADD_POST, post: post });
export const toggleMyIsFetchingAT = (bull) => ({ type: TOGGLE_MY_IS_FETCHING, value: bull });
export const setStatusAT = (status) => ({ type: SET_MY_STATUS, status: status });
export const setSetHasFetchedProfile = (bull) => ({ type: HAS_FETCHED_PROFILE, bull: bull });

export const getMyProfileThunk = () => {
  return (dispatch, getState) => {
    let id = getState().auth.id;
    dispatch(toggleMyIsFetchingAT(true));
    useGetProfile(id)
      .then((dataAll) => {
        let data = { ...dataAll[1], status: dataAll[0] };
        dispatch(
          setMyProfileInfoAT(
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
        dispatch(setStatusAT(data.status === null ? "" : data.status));
        dispatch(setPostsAT([]));

        dispatch(toggleMyIsFetchingAT(false));
        dispatch(setSetHasFetchedProfile(true));
      })
      .catch((err) => {
        console.error(err);
        dispatch(toggleMyIsFetchingAT(false));
        dispatch(setSetHasFetchedProfile(true));
      });
  };
};

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

export const setNewProfileDataThunk = (jsonObj) => {
  return (dispatch) => {
    dispatch(toggleMyIsFetchingAT(true));
    updateProfile(jsonObj)
      .then((data) => {
        dispatch(getMyProfileThunk());
        dispatch(toggleMyIsFetchingAT(false));
      })
      .catch((err) => {
        console.error(err);
        dispatch(toggleMyIsFetchingAT(false));
      });
  };
};

export const setStatusThunk = (status) => {
  return (dispatch) => {
    dispatch(toggleMyIsFetchingAT(true));
    updateStatus(status).then((data) => {
      dispatch(setStatusAT(status));
      dispatch(toggleMyIsFetchingAT(false));
    });
  };
};

export const setAvatarThunk = (file) => {
  return (dispatch, getState) => {
    dispatch(toggleMyIsFetchingAT(true));
    updateAvatar(file).then((data) => {
      dispatch(getMyProfileThunk(getState().auth.id));
      dispatch(toggleMyIsFetchingAT(false));
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
