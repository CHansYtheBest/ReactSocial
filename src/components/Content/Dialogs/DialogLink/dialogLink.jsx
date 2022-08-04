import React from "react";
import s from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogLinks(props) {
  let dialogLinks = React.Children.toArray(props.dialogData.map((names) => <DialogLink id={names.id} name={names.name} />));
  return (
    <>
      <div className={s.dialogs}>{dialogLinks}</div>
    </>
  );
}

const DialogLink = (props) => {
  return <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>;
};

export default DialogLinks;
