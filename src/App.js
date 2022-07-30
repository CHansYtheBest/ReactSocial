import "./App.css";
import React from "react";
import Profile from "./components/Content/Profile/profile";
import Dialogs from "./components/Content/Dialogs/dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout.jsx";
import { dialogData, profileData } from "./index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/profile" element={<Profile profileData={profileData} />} />
            <Route path="/dialog/*" element={<Dialogs dialogData={dialogData} />} />
            <Route path="*" element={""} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
