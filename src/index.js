import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogData = [
  { id: "1", name: "Yoo Yu" },
  { id: "2", name: "Boo Boo" },
  { id: "3", name: "Crazy Bob" },
  { id: "4", name: "Pop Bob" },
  { id: "5", name: "Poop Boob" },
];

let profileData = [
  {
    name: "Peepo",
    surname: "The Frog",
    avatar: "https://pbs.twimg.com/profile_images/1083056964840480768/gYcc4I4-_400x400.jpg",
    posts: [
      { id: "1", postContent: "My day has been nice." },
      { id: "2", postContent: "How do I use the internet?" },
    ],
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { dialogData, profileData };
