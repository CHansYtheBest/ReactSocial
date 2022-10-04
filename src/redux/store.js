import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { searchReducer } from "./searchReducer";
import { authReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  searchPage: searchReducer,
  auth: authReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
