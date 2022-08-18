import { combineReducers, configureStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
});

let store = configureStore();
