import React from "react";
import { useParams } from "react-router-dom";
import { MapMessage } from "./MapMessages/mapMessages";
import s from "./messages.module.css";

function Messages(props) {
  const { id } = useParams();

  let onTextChange = (e) => {
    let message = e.target.value;
    props.onTextChange(message, id);
  };

  let addMessage = () => {
    props.addMessage(id);
  };

  console.log(props.getCurrentMessagesData(id));
  console.log(id);

  return (
    <div className={s.messages}>
      {<MapMessage messagesData={props.getCurrentMessagesData(id).dialog} />}
      <textarea placeholder="Enter your message..." value={props.getCurrentMessagesData(id).newMessageText} onChange={onTextChange}></textarea>
      <button onClick={addMessage}>Send message</button>
    </div>
  );
}

export default Messages;
