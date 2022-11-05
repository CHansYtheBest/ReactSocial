import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  dialogData: [
    { id: 0, name: "Yoo Yu", avatar: "https://cdn-icons-png.flaticon.com/512/21/21104.png" },
    { id: 1, name: "Karen McChicken", avatar: "https://cdn-icons-png.flaticon.com/512/21/21104.png" },
    { id: 2, name: "Crazy Dave", avatar: "https://cdn-icons-png.flaticon.com/512/21/21104.png" },
    { id: 3, name: "Pop Bob", avatar: "https://cdn-icons-png.flaticon.com/512/21/21104.png" },
    { id: 4, name: "Poop Boob", avatar: "https://cdn-icons-png.flaticon.com/512/21/21104.png" },
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

const dialogsReducer = createSlice({
  name: "dialogsReducer",

  initialState: initialState,

  reducers: {
    addMessage(state, action) {
      let dialogIndex = state.messagesData.findIndex((i) => i.dialogid === Number(action.payload.id));

      let newMessage = {
        id: state.messagesData[dialogIndex].dialog.length.toString(),
        from: "me",
        message: state.messagesData[dialogIndex].newMessageText,
      };

      state.messagesData[dialogIndex].dialog.push(newMessage);
      state.messagesData[dialogIndex].newMessageText = "";
    },

    updateMessage(state, action) {
      let dialogIndex = state.messagesData.findIndex((i) => i.dialogid === Number(action.payload.id));

      state.messagesData[dialogIndex].newMessageText = action.payload.message;
    },
  },
});

export default dialogsReducer.reducer;
export const { addMessage, updateMessage } = dialogsReducer.actions;
