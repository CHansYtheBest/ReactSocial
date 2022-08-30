import React from "react";
import { MapMessage } from "./MapMessages/mapMessages";
import s from "./messages.module.css";

function Messages(props) {
  let onTextChange = (e) => {
    let message = e.target.value;
    props.onTextChange(message);
  };

  let addMessage = () => {
    props.addMessage();
  };

  return (
    <div className={s.messages}>
      {<MapMessage messagesData={props.getCurrentMessagesData().dialog} />}
      <textarea placeholder="Enter your message..." value={props.getCurrentMessagesData().newMessageText} onChange={onTextChange}></textarea>
      <button onClick={addMessage}>Send message</button>
    </div>
  );
}

export default Messages;
