import "./App.css";
import React from "react";
import Profile from "./components/Content/Profile/profile";
import Dialogs from "./components/Content/Dialogs/dialogsList";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout.jsx";
import Messages from "./components/Content/Dialogs/messages";

const App = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout profilePage={props.state.profilePage} />}>
          <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path="/dialog" element={<Dialogs dialogData={props.state.dialogsPage.dialogData} />}>
            <Route path=":id" element={<Messages messagesData={props.state.dialogsPage.messagesData} dispatch={props.dispatch} />} />
            <Route path="/dialog" element={<div>Please choose a dialog</div>} />
          </Route>
          <Route path="*" element={""} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
