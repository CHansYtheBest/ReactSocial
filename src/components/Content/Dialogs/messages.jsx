import React from "react";
import { useParams } from "react-router-dom";
import { addMessageActionType, updateMessageActionType } from "../../../redux/state";
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
  const textRef = React.useRef();

  let onTextChange = () => {
    let message = textRef.current.value;
    props.dispatch(updateMessageActionType(message, id));
    console.log(props.messagesData.messages[id]);
  };

  let addMessage = () => {
    props.dispatch(addMessageActionType(id));
  };

  return (
    <div className={s.messages}>
      {<MapMessage messagesData={props.messagesData.messages[id].dialog} />}
      <textarea ref={textRef} value={props.messagesData.messages[id].newMessageText} onChange={onTextChange}></textarea>
      <button onClick={addMessage}>Send message</button>
    </div>
  );
}

export default Messages;
