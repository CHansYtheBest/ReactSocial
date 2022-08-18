import React from "react";
import { useParams } from "react-router-dom";
import { addMessageActionType, updateMessageActionType } from "../../../redux/dialogsReducer";
import s from "./messages.module.css";

function MapMessage(props) {
  let messagesArr = React.Children.toArray(
    props.messagesData.map((message) => {
      let fromwho;
      if (message.from === "me") {
        fromwho = s.me;
      } else fromwho = s.him;
      return <p className={fromwho}> {message.message}</p>;
    })
  );

  return <>{messagesArr}</>;
}

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
      {<MapMessage messagesData={props.messagesData.messages[id].dialog} />}
      <textarea placeholder="Enter your message..." value={props.messagesData.messages[id].newMessageText} onChange={onTextChange}></textarea>
      <button onClick={addMessage}>Send message</button>
    </div>
  );
}

export default Messages;
