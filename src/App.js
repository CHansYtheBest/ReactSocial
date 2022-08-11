import "./App.css";
import React from "react";
import Profile from "./components/Content/Profile/profile";
import Dialogs from "./components/Content/Dialogs/dialogs";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout.jsx";
import Messages from "./components/Content/Dialogs/messages";

const App = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/profile"
            element={
              <Profile profileData={props.state.profilePage.profileData} addPost={props.addPost} updatePostNewText={props.updatePostNewText} />
            }
          />
          <Route path="/dialog" element={<Dialogs dialogData={props.state.dialogsPage.dialogData} />}>
            <Route path=":id" element={<Messages messagesData={props.state.dialogsPage.messagesData} />} />
            <Route path="/dialog" element={<div>Please choose a dialog</div>} />
          </Route>
          <Route path="*" element={""} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
