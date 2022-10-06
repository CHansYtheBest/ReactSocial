import React from "react";
import s from "../messages.module.css";

export function MapMessage(props) {
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
