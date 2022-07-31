import "./App.css";
import React from "react";
import Profile from "./components/Content/Profile/profile";
import Dialogs from "./components/Content/Dialogs/dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout.jsx";

const App = (props) => {
  console.log(props);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/profile" element={<Profile profileData={props.state.profilePage.profileData} />} />
            <Route path="/dialog/*" element={<Dialogs dialogData={props.state.dialogsPage.dialogData} />} />
            <Route path="*" element={""} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
