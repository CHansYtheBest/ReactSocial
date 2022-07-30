import React from "react";
import s from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogLink = (props) => {
  return <NavLink to={props.id}>{props.name}</NavLink>;
};

export default DialogLink;
