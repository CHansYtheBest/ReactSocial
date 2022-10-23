import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export function renderEverything() {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </HashRouter>
      </Provider>
    </React.StrictMode>
  );
}

renderEverything();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
