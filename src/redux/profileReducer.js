import { useGetProfile } from "../customHooks/fetchFromAPI";

const ADD_POST = "ADD-POST";
const UPDATE_POST_NEW_TEXT = "UPDATE-POST-NEW-TEXT";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";
const SET_USERID = "SET_USERID";
const SET_ERROR = "SET_ERROR";
const SET_POSTS = "SET_POSTS";
const TOGGLE_IS_FETCHING = "";

let initialState = {
  userId: 0,
  fullName: "Peepo The Frog",
  avatar: "https://pbs.twimg.com/profile_images/1083056964840480768/gYcc4I4-_400x400.jpg",
  aboutMe: "Hey, I'm kinda a frog...",
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
  posts: [
    { id: 0, postContent: "How do I use the internet?" },
    { id: 1, postContent: "My day has been nice." },
    { id: 2, postContent: "Nevermind." },
  ],
  postNewText: "",
  isFetching: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length,
        postContent: state.postNewText,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        postNewText: "",
      };
    }
    case UPDATE_POST_NEW_TEXT: {
      return {
        ...state,
        postNewText: action.content,
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
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.value };
    }
    default: {
      return state;
    }
  }
};

export const addPostAT = () => ({ type: ADD_POST });
export const updatePostAT = (post) => ({ type: UPDATE_POST_NEW_TEXT, content: post });
export const setUserIDAT = (userId) => ({ type: SET_USERID, userId: userId });
export const setProfileInfoAT = (data) => ({ type: SET_PROFILE_INFO, data: data });
export const setErrorAT = (error) => ({ type: SET_ERROR, error: error });
export const setPostsAT = (posts) => ({ type: SET_POSTS, posts: posts });
export const toggleIsFetchingAT = (bull) => ({ type: TOGGLE_IS_FETCHING, value: bull });

export const getProfileThunk = (navigate, id) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAT(true));
    useGetProfile(id)
      .then((data) => {
        dispatch(setUserIDAT(data.userId));
        dispatch(
          setProfileInfoAT(
            data,
            (data.photos.large = data.photos.large === null ? "https://cdn-icons-png.flaticon.com/512/21/21104.png" : data.photos.large)
          )
        );
        dispatch(setPostsAT([]));
        dispatch(toggleIsFetchingAT(false));
      })
      .catch((err) => {
        console.error(err);
        navigate("/profile/error");
      });
  };
};
