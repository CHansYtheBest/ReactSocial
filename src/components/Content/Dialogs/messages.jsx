import React from "react";
import { useParams } from "react-router-dom";
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

  return (
    <div className={s.messages}>
      {<MapMessage messagesData={props.messagesData[id].dialog} />}
      <textarea></textarea>
      <button>Send message</button>
    </div>
  );
}

export default Messages;
