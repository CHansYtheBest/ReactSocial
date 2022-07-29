import React from "react";
import s from "./dialogs.module.css";
import Messages from "./messages";
import "./dialogPage.css";
import { NavLink } from "react-router-dom";

const DialogLink = (props) => {
  return <NavLink to={props.id}>{props.name}</NavLink>;
};

function Dialogs(props) {
  return (
    <div className="dialog_page">
      <div className={s.dialogs}>
        <DialogLink id="1" name="Yoo Yu" />
        <DialogLink id="2" name="Boo Boo" />
        <DialogLink id="3" name="Crazy Bob" />
        <DialogLink id="4" name="Pop Bob" />
      </div>
      <Messages />
    </div>
  );
}

export default Dialogs;
