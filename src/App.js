import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout.jsx";
import ProfileConteiner from "./components/Content/Profile/profileContainer";
import SearchContainer from "./components/Content/Search/searchContainer";
import ProfileError from "./components/Content/Profile/profileError";
import MessagesContainer from "./components/Content/Dialogs/Messages/messagesContainer";
import DialogsContainer from "./components/Content/Dialogs/dialogListContainer";

const App = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout store={props.store} />}>
          <Route path="/profile">
            <Route path="/profile" element={<ProfileConteiner store={props.store} />} />
            <Route path=":id" element={<ProfileConteiner store={props.store} />} />
            <Route path="error" element={<ProfileError profilePage={props.state.profilePage}></ProfileError>} />
          </Route>
          <Route path="/dialog" element={<DialogsContainer dialogData={props.state.dialogsPage.dialogData} />}>
            <Route path=":id" element={<MessagesContainer store={props.store} />} />
            <Route path="/dialog" element={<div>Please choose a dialog</div>} />
          </Route>
          <Route path="/search" element={<SearchContainer store={props.store} />}>
            <Route path=":id" element={<SearchContainer store={props.store} />} />
          </Route>
          <Route path="*" element={""} />
        </Route>
        <Route path="/login" element={<div>Not logged in</div>} />
      </Routes>
    </>
  );
};

export default App;
