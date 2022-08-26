import React from "react";
import { useParams } from "react-router-dom";
import { addMessageActionType, updateMessageActionType } from "../../../redux/dialogsReducer";
import Messages from "./messages";

function MessagesContainer(props) {
  const { id } = useParams();

  let onTextChange = (message) => {
    props.store.dispatch(updateMessageActionType(message, id));
  };

  let addMessage = () => {
    props.store.dispatch(addMessageActionType(id));
  };
  return <Messages onTextChange={onTextChange} addMessage={addMessage} currentMessagesData={props.store.getState().dialogsPage.messagesData[id]} />;
}

export default MessagesContainer;
