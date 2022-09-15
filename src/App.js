import "./App.css";
import React from "react";
import Dialogs from "./components/Content/Dialogs/dialogsList";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout.jsx";
import ProfileConteiner from "./components/Content/Profile/profileContainer";
import MessagesContainer from "./components/Content/Dialogs/messagesContainer";
import SearchContainer from "./components/Content/Search/searchContainer";
import ProfileError from "./components/Content/Profile/profileError";

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
          <Route path="/dialog" element={<Dialogs dialogData={props.state.dialogsPage.dialogData} />}>
            <Route path=":id" element={<MessagesContainer store={props.store} />} />
            <Route path="/dialog" element={<div>Please choose a dialog</div>} />
          </Route>
          <Route path="/search" element={<SearchContainer store={props.store} />}>
            <Route path=":id" element={<SearchContainer store={props.store} />} />
          </Route>
          <Route path="*" element={""} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
