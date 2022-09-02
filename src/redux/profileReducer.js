const ADD_POST = "ADD-POST";
const UPDATE_POST_NEW_TEXT = "UPDATE-POST-NEW-TEXT";

let initialState = {
  name: "Peepo",
  surname: "The Frog",
  avatar: "https://pbs.twimg.com/profile_images/1083056964840480768/gYcc4I4-_400x400.jpg",
  posts: [
    { id: 0, postContent: "How do I use the internet?" },
    { id: 1, postContent: "My day has been nice." },
    { id: 2, postContent: "Nevermind." },
  ],
  postNewText: "",
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
    default: {
      return state;
    }
  }
};

export const addPostActionType = () => ({ type: ADD_POST });
export const updatePostActionType = (post) => ({ type: UPDATE_POST_NEW_TEXT, content: post });
