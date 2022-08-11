import React from "react";
import s from "./dialogs.module.css";
import DialogLinks from "./DialogLink/dialogLink";
import "./dialogPage.css";
import { Outlet } from "react-router-dom";

function Dialogs(props) {
  return (
    <div className="dialog_page">
      <DialogLinks dialogData={props.dialogData} />
      <Outlet />
    </div>
  );
}

export default Dialogs;
