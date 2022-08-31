import { connect } from "react-redux";
import { addMessageActionType, updateMessageActionType } from "../../../redux/dialogsReducer";
import Messages from "./messages";

let mapStateToProps = (state) => {
  return {
    getCurrentMessagesData: (id) => {
      return state.dialogsPage.messagesData[id];
    },
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (message, id) => {
      dispatch(updateMessageActionType(message, id));
    },
    addMessage: (id) => {
      dispatch(addMessageActionType(id));
    },
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
