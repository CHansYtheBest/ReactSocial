import React from "react";
import { useState } from "react";

function OnElsesProfile(props) {
  return <p>{props.status === null ? "Here could be a status..." : props.status}</p>;
}

function OnMyProfile(props) {
  let [newStatusText, setNewStatusText] = useState("");
  let [editMode, updateEditMode] = useState(false);

  let startEditMode = () => {
    setNewStatusText(props.status === null ? "" : props.status);
    updateEditMode(true);
  };
  let finishEditMode = () => {
    props.setStatus(newStatusText);
    updateEditMode(false);
  };
  let onNewStatusChange = (e) => {
    setNewStatusText(e.target.value);
  };

  return (
    <>
      {editMode ? (
        <input
          maxLength={230}
          autoFocus
          onBlur={finishEditMode}
          placeholder="Enter new status..."
          value={newStatusText}
          onChange={onNewStatusChange}
        ></input>
      ) : (
        <p onClick={startEditMode}>{props.status === null || props.status === "" ? "Here could be a status..." : props.status}</p>
      )}
    </>
  );
}

export default function ProfileStatus(props) {
  return (
    <>
      {props.isLoggedProfile ? (
        <OnMyProfile status={props.status} setStatus={props.setStatus}></OnMyProfile>
      ) : (
        <OnElsesProfile status={props.status}></OnElsesProfile>
      )}
    </>
  );
}
