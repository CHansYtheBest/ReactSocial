import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { searchReducer } from "./searchReducer";
import { authReducer } from "./authReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  searchPage: searchReducer,
  auth: authReducer,
});

export let store = createStore(reducers);
