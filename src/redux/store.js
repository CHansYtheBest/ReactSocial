import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { searchReducer } from "./searchReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  searchPage: searchReducer,
});

export let store = createStore(reducers);
