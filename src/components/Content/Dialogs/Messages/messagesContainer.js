import { connect } from "react-redux";
import { addMessageAT, updateMessageAT } from "../../../../redux/dialogsReducer";
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
      dispatch(updateMessageAT(message, id));
    },
    addMessage: (id) => {
      dispatch(addMessageAT(id));
    },
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
