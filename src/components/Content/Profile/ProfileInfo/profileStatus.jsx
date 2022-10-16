import React from "react";
import { useState } from "react";

function OnElsesProfile(props) {
  return <p>{props.info === null ? "" : props.info}</p>;
}

function OnMyProfile(props) {
  let [newInfo, setNewInfo] = useState("");
  let [editMode, updateEditMode] = useState(false);

  let startEditMode = () => {
    setNewInfo(props.info === null ? "" : props.info);
    updateEditMode(true);
  };
  let finishEditMode = () => {
    props.setter(newInfo);
    updateEditMode(false);
  };
  let onNewStatusChange = (e) => {
    setNewInfo(e.target.value);
  };

  return (
    <>
      {editMode ? (
        <input maxLength={230} autoFocus onBlur={finishEditMode} placeholder="Enter..." value={newInfo} onChange={onNewStatusChange}></input>
      ) : (
        <p onClick={startEditMode}>{props.info === null || props.info === "" ? "|" : props.info}</p>
      )}
    </>
  );
}

export default function EditebleInfo(props) {
  return (
    <>
      {props.isLoggedProfile ? (
        <OnMyProfile info={props.info} setter={props.setter}></OnMyProfile>
      ) : (
        <OnElsesProfile info={props.info}></OnElsesProfile>
      )}
    </>
  );
}
