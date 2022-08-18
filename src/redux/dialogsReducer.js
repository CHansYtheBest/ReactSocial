const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_NEW_TEXT = "UPDATE_MESSAGE_NEW_TEXT";

export const dialogsReducer = (state, action) => {
  let dialogIndex = state.messagesData.messages.findIndex((i) => i.dialogid === Number(action.id));

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesData.messages[dialogIndex].dialog.length.toString(),
        from: "me",
        message: state.messagesData.messages[dialogIndex].newMessageText,
      };
      state.messagesData.messages[dialogIndex].dialog.push(newMessage);
      state.messagesData.messages[dialogIndex].newMessageText = "";
      return state;
    case UPDATE_MESSAGE_NEW_TEXT:
      state.messagesData.messages[dialogIndex].newMessageText = action.content;
      return state;
    default:
      return state;
  }
};
export const addMessageActionType = (currentId) => ({ type: ADD_MESSAGE, id: currentId });
export const updateMessageActionType = (message, currentId) => ({ type: UPDATE_MESSAGE_NEW_TEXT, content: message, id: currentId });
