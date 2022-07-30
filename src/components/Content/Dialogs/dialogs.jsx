import React from "react";
import s from "./dialogs.module.css";
import Messages from "./messages";
import "./dialogPage.css";
import DialogLink from "./DialogLink/dialogs";

function Dialogs(props) {
  let dialogLinks = React.Children.toArray(props.dialogData.map((names) => <DialogLink id={names.id} name={names.name} />));
  return (
    <div className="dialog_page">
      <div className={s.dialogs}>{dialogLinks}</div>
      <Messages />
    </div>
  );
}

export default Dialogs;
