import "./App.css";
import React from "react";
import Dialogs from "./components/Content/Dialogs/dialogsList";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout.jsx";
import ProfileConteiner from "./components/Content/Profile/profileContainer";
import MessagesContainer from "./components/Content/Dialogs/messagesContainer";
import SearchContainer from "./components/Content/Search/searchContainer";

const App = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout profilePage={props.state.profilePage} />}>
          <Route path="/profile" element={<ProfileConteiner store={props.store} />} />
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
