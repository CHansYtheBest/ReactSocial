import React from "react";
import s from "./dialogs.module.css";
import Messages from "./messages";
import "./dialogPage.css";

function Dialogs(props) {
  return (
    <div className="dialog_page">
      <div className={s.dialogs}>
        <p>Bla Bla</p>
        <p>Boo Boo</p>
        <p>Crazy Bob</p>
        <p>Pee Pee</p>
        <p>Pop Bob</p>
      </div>
      <Messages />
    </div>
  );
}

export default Dialogs;
