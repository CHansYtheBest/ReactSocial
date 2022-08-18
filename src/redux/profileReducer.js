const ADD_POST = "ADD-POST";
const UPDATE_POST_NEW_TEXT = "UPDATE-POST-NEW-TEXT";

export const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        postContent: state.postNewText,
      };
      state.posts.push(newPost);
      state.postNewText = "";
      return state;
    case UPDATE_POST_NEW_TEXT:
      state.postNewText = action.content;
      return state;
    default:
      return state;
  }
};

export const addPostActionType = () => ({ type: ADD_POST });
export const updatePostActionType = (post) => ({ type: UPDATE_POST_NEW_TEXT, content: post });
