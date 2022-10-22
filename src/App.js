import "./App.css";
import React, { memo, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout.jsx";
import ProfileConteiner from "./components/Content/Profile/profileContainer";
import SearchContainer from "./components/Content/Search/searchContainer";
import ProfileError from "./components/Content/Profile/profileError";
import MessagesContainer from "./components/Content/Dialogs/Messages/messagesContainer";
import DialogsContainer from "./components/Content/Dialogs/dialogListContainer";
import LoginContainer from "./components/Login/loginContainer";
import { connect } from "react-redux";
import { getLoggedInThunk } from "./redux/authReducer";
import { getMyProfileThunk } from "./redux/authReducer";
import SettingsContainer from "./components/Content/Settings/settingsContainer";
import Preloader from "./components/Layout/Navigation/Preloader/preloader";

const App = memo((props) => {
  useEffect(() => {
    props.getLoggedInThunk();
    if (props.id !== null) {
      props.getMyProfileThunk();
    }
  }, [props.id]);

  return (
    <>
      {props.id !== null && !props.isLoaded ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <>
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
              <Route path="/settings" element={<SettingsContainer />} />
              <Route path="*" element={""} />
            </>
          </Route>
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      ) : (
        <>
          <Preloader />
        </>
      )}
    </>
  );
});

export default connect(
  (state) => {
    return {
      id: state.auth.id,
      isLoaded: state.auth.myProfile.avatar.small === "",
    };
  },
  {
    getLoggedInThunk,
    getMyProfileThunk,
  }
)(App);
