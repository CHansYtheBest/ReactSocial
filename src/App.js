import "./App.css";
import React from "react";
import Header from "./components/Layout/Navigation/Header/Header";
import Nav from "./components/Layout/Navigation/Navbar/nav";
import Profile from "./components/Content/Profile/profile";
import Dialogs from "./components/Content/Dialogs/dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/profile"
              element={
                <Profile
                  name="Peepo"
                  surname="The Frog"
                  avatar="https://pbs.twimg.com/profile_images/1083056964840480768/gYcc4I4-_400x400.jpg"
                  post=" I have a nice day."
                />
              }
            />
            <Route path="/dialog/*" element={<Dialogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
