import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import searchReducer from "./searchReducer";
import authReducer from "./authReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  searchPage: searchReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: reducers,
});
