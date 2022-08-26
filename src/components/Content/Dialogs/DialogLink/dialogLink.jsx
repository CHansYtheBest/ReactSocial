import React from "react";
import s from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogLinks(props) {
  let dialogLinks = React.Children.toArray(props.dialogData.map((names) => <NavLink to={"/dialog/" + names.id}>{names.name}</NavLink>));
  return (
    <>
      <div className={s.dialogs}>{dialogLinks}</div>
    </>
  );
}

export default DialogLinks;
