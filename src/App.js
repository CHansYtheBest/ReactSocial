import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout.jsx";
import ProfileConteiner from "./components/Content/Profile/profileContainer";
import SearchContainer from "./components/Content/Search/searchContainer";
import ProfileError from "./components/Content/Profile/profileError";
import MessagesContainer from "./components/Content/Dialogs/Messages/messagesContainer";
import DialogsContainer from "./components/Content/Dialogs/dialogListContainer";
import LoginContainer from "./components/Login/loginContainer";

const App = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/profile">
            <Route path="/profile" element={<ProfileConteiner />} />
            <Route path=":id" element={<ProfileConteiner />} />
            <Route path="error" element={<ProfileError />} />
          </Route>
          <Route path="/dialog" element={<DialogsContainer />}>
            <Route path=":id" element={<MessagesContainer />} />
            <Route path="/dialog" element={<div>Please choose a dialog</div>} />
          </Route>
          <Route path="/search/" element={<SearchContainer onlyFriends={false} />}>
            <Route path=":id" element={<SearchContainer />} />
          </Route>
          <Route path="/friends/" element={<SearchContainer onlyFriends={true} />}>
            <Route path=":id" element={<SearchContainer />} />
          </Route>
          <Route path="*" element={""} />
        </Route>
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </>
  );
};

export default App;
