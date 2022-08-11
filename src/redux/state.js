let store = {
  _state: {
    dialogsPage: {
      dialogData: [
        { id: "0", name: "Yoo Yu" },
        { id: "1", name: "Karen McChicken" },
        { id: "2", name: "Crazy Dave" },
        { id: "3", name: "Pop Bob" },
        { id: "4", name: "Poop Boob" },
      ],
      messagesData: [
        {
          dialogid: "0",
          dialog: [
            { from: "me", message: "Yoo, my guy. How's life?" },
            { from: "him", message: "Peepo, hello. My life has been cool." },
            { from: "me", message: "I'm glad to hear that, my dear friend." },
            { from: "me", message: "Would you like to hang out?" },
            { from: "him", message: "Yes, indeed I would." },
          ],
        },
        {
          dialogid: "1",
          dialog: [
            { from: "me", message: "Ms. Karen, I would like to submit my school project." },
            { from: "him", message: "no" },
            { from: "me", message: "Why?" },
          ],
        },
        {
          dialogid: "2",
          dialog: [
            { from: "him", message: "I am in your walls Peepo." },
            { from: "him", message: "Peepo, you can't hide." },
            { from: "him", message: "You can't escape Peepo." },
            { from: "him", message: "I think about you when I go to sleep" },
            { from: "me", message: "Dave, please stop." },
          ],
        },
        {
          dialogid: "3",
          dialog: [
            { from: "me", message: "Hey, Bob. I hate you." },
            { from: "him", message: ":(" },
            { from: "me", message: "Sorry, I was joking." },
          ],
        },
        {
          dialogid: "4",
          dialog: [
            { from: "me", message: "Hey, Boob. I love you." },
            { from: "him", message: ":)" },
            { from: "him", message: "Thanks." },
          ],
        },
      ],
    },
    profilePage: {
      profileData: {
        name: "Peepo",
        surname: "The Frog",
        avatar: "https://pbs.twimg.com/profile_images/1083056964840480768/gYcc4I4-_400x400.jpg",
        posts: [
          { id: "0", postContent: "How do I use the internet?" },
          { id: "1", postContent: "My day has been nice." },
          { id: "2", postContent: "Nevermind." },
        ],
        postNewText: "",
      },
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: this._state.profilePage.profileData.posts.length.toString(),
        postContent: this._state.profilePage.profileData.postNewText,
      };

      this._state.profilePage.profileData.posts.push(newPost);
      this._state.profilePage.profileData.postNewText = "";
      this._renderEverything();
    } else if (action.type === "UPDATE-POST-NEW-TEXT") {
      this._state.profilePage.profileData.postNewText = action.content;
      this._renderEverything();
    }
  },
};

export { store };
