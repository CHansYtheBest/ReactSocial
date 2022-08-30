const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_NEW_TEXT = "UPDATE_MESSAGE_NEW_TEXT";

let initialState = {
  dialogData: [
    { id: 0, name: "Yoo Yu" },
    { id: 1, name: "Karen McChicken" },
    { id: 2, name: "Crazy Dave" },
    { id: 3, name: "Pop Bob" },
    { id: 4, name: "Poop Boob" },
  ],
  messagesData: [
    {
      dialogid: 0,
      dialog: [
        { id: 0, from: "me", message: "Yoo, my guy. How's life?" },
        { id: 1, from: "him", message: "Peepo, hello. My life has been cool." },
        { id: 2, from: "me", message: "I'm glad to hear that, my dear friend." },
        { id: 3, from: "me", message: "Would you like to hang out?" },
        { id: 4, from: "him", message: "Yes, indeed I would." },
      ],
      newMessageText: "",
    },
    {
      dialogid: 1,
      dialog: [
        { id: 0, from: "me", message: "Ms. Karen, I would like to submit my school project." },
        { id: 1, from: "him", message: "no" },
        { id: 2, from: "me", message: "Why?" },
      ],
      newMessageText: "",
    },
    {
      dialogid: 2,
      dialog: [
        { id: 0, from: "him", message: "I am in your walls Peepo." },
        { id: 1, from: "him", message: "Peepo, you can't hide." },
        { id: 2, from: "him", message: "You can't escape Peepo." },
        { id: 3, from: "him", message: "I think about you when I go to sleep" },
        { id: 4, from: "me", message: "Dave, please stop." },
      ],
      newMessageText: "",
    },
    {
      dialogid: 3,
      dialog: [
        { id: 0, from: "me", message: "Hey, Bob. I hate you." },
        { id: 1, from: "him", message: ":(" },
        { id: 2, from: "me", message: "Sorry, I was joking." },
      ],
      newMessageText: "",
    },
    {
      dialogid: 4,
      dialog: [
        { id: 0, from: "me", message: "Hey, Boob. I love you." },
        { id: 1, from: "him", message: ":)" },
        { id: 2, from: "him", message: "Thanks." },
      ],
      newMessageText: "",
    },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  let dialogIndex = state.messagesData.findIndex((i) => i.dialogid === Number(action.id));
  switch (action.type) {
    case ADD_MESSAGE:
      let stateCopy = { ...state };
      stateCopy.messagesData = [...stateCopy.messagesData];
      let newMessage = {
        id: state.messagesData[dialogIndex].dialog.length.toString(),
        from: "me",
        message: state.messagesData[dialogIndex].newMessageText,
      };
      stateCopy.messagesData[dialogIndex].dialog.push(newMessage);
      stateCopy.messagesData[dialogIndex].newMessageText = "";
      return stateCopy;
    case UPDATE_MESSAGE_NEW_TEXT:
      let stateCopy1 = { ...state };
      stateCopy1.messagesData[dialogIndex] = { ...state.messagesData[dialogIndex] };
      stateCopy1.messagesData[dialogIndex].newMessageText = action.content;
      return stateCopy1;
    default:
      return state;
  }
};
export const addMessageActionType = (currentId) => ({ type: ADD_MESSAGE, id: currentId });
export const updateMessageActionType = (message, currentId) => ({ type: UPDATE_MESSAGE_NEW_TEXT, content: message, id: currentId });
