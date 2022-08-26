import React from "react";
import { useParams } from "react-router-dom";
import { addMessageActionType, updateMessageActionType } from "../../../redux/dialogsReducer";
import { MapMessage } from "./MapMessages/mapMessages";
import s from "./messages.module.css";

function Messages(props) {
  const { id } = useParams();

  let onTextChange = (e) => {
    let message = e.target.value;
    props.dispatch(updateMessageActionType(message, id));
  };

  let addMessage = () => {
    props.dispatch(addMessageActionType(id));
  };

  return (
    <div className={s.messages}>
      {<MapMessage messagesData={props.messagesData[id].dialog} />}
      <textarea placeholder="Enter your message..." value={props.messagesData[id].newMessageText} onChange={onTextChange}></textarea>
      <button onClick={addMessage}>Send message</button>
    </div>
  );
}

export default Messages;
