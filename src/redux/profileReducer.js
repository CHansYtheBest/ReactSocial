import { updateStatus, useGetProfile } from "../customHooks/fetchFromAPI";

const ADD_POST = "ADD-POST";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";
const SET_USERID = "SET_USERID";
const SET_ERROR = "SET_ERROR";
const SET_POSTS = "SET_POSTS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_STATUS = "SET_STATUS";

let initialState = {
  userId: 0,
  fullName: "",
  avatar: "",
  aboutMe: "Hey, I'm kinda a frog...",
  status: "",
  contacts: {
    facebook: "facebook.com",
    website: null,
    vk: "vk.com/",
    twitter: "https://twitter.com/",
    instagram: "instagram.com/",
    youtube: null,
    github: "github.com",
    mainLink: null,
  },
  lookingForAJob: true,
  lookingForAJobDescription: "Ye, I can do thing. Pls, I need money",
  posts: [],
  isFetching: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length,
        postContent: action.post,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        postNewText: "",
      };
    }
    case SET_USERID: {
      return { ...state, userId: action.userId };
    }
    case SET_PROFILE_INFO: {
      return {
        ...state,
        fullName: action.data.fullName,
        avatar: action.data.photos.large,
        aboutMe: action.data.aboutMe,
        lookingForAJob: action.data.lookingForAJob,
        lookingForAJobDescription: action.data.lookingForAJobDescription,
        contacts: action.data.contacts,
      };
    }
    case SET_ERROR: {
      return { ...state, errorMessage: action.error.data.message, errorStatus: action.error.status };
    }
    case SET_POSTS: {
      return { ...state, posts: action.posts };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.value };
    }
    default: {
      return state;
    }
  }
};

export const addPostAT = (post) => ({ type: ADD_POST, post: post });
export const setUserIDAT = (userId) => ({ type: SET_USERID, userId: userId });
export const setProfileInfoAT = (data) => ({ type: SET_PROFILE_INFO, data: data });
export const setErrorAT = (error) => ({ type: SET_ERROR, error: error });
export const setPostsAT = (posts) => ({ type: SET_POSTS, posts: posts });
export const toggleIsFetchingAT = (bull) => ({ type: TOGGLE_IS_FETCHING, value: bull });
export const setStatusAT = (status) => ({ type: SET_STATUS, status: status });

export const getProfileThunk = (navigate, id) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAT(true));
    useGetProfile(id)
      .then((dataAll) => {
        let data = { ...dataAll[1], status: dataAll[0] };
        dispatch(setUserIDAT(data.userId));
        dispatch(
          setProfileInfoAT(
            data,
            (data.photos.large = data.photos.large === null ? "https://cdn-icons-png.flaticon.com/512/21/21104.png" : data.photos.large)
          )
        );
        dispatch(setStatusAT(data.status === null ? "" : data.status));
        dispatch(setPostsAT([]));
        dispatch(toggleIsFetchingAT(false));
      })
      .catch((err) => {
        console.error(err);
        navigate("/profile/error");
      });
  };
};

export const setStatusThunk = (status) => {
  return (dispatch) => {
    console.log(status);
    dispatch(toggleIsFetchingAT(true));
    updateStatus(status).then((data) => {
      console.log(data);
      dispatch(setStatusAT(status));
      dispatch(toggleIsFetchingAT(false));
    });
  };
};
