import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogData: [
        { id: 0, name: "Yoo Yu" },
        { id: 1, name: "Karen McChicken" },
        { id: 2, name: "Crazy Dave" },
        { id: 3, name: "Pop Bob" },
        { id: 4, name: "Poop Boob" },
      ],
      messagesData: {
        messages: [
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
      },
    },
    profilePage: {
      name: "Peepo",
      surname: "The Frog",
      avatar: "https://pbs.twimg.com/profile_images/1083056964840480768/gYcc4I4-_400x400.jpg",
      posts: [
        { id: 0, postContent: "How do I use the internet?" },
        { id: 1, postContent: "My day has been nice." },
        { id: 2, postContent: "Nevermind." },
      ],
      postNewText: "",
    },
  },
  getState() {
    return this._state;
  },
  _renderEverything() {
    console.log(this.getState());
  },
  renderCallback(observer) {
    this._renderEverything = observer;
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._renderEverything();
  },
};

export { store };
