import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessageActionType, updateMessageActionType } from "../../../redux/dialogsReducer";
import Messages from "./messages";

const getId = () => {
  const { id } = useParams();
  return id;
};

let mapStateToProps = (state) => {
  return {
    getCurrentMessagesData: () => {
      return state.dialogsPage.messagesData[getId()];
    },
  };
};

let mapDispatchToProps = (dispatch) => {
  let id = getId();
  return {
    onTextChange: (message) => {
      dispatch(updateMessageActionType(message, id));
    },
    addMessage: () => {
      dispatch(addMessageActionType(id));
    },
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
