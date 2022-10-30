import { connect } from "react-redux";
import { addMessage, updateMessage } from "../../../../redux/dialogsReducer";
import Messages from "./messages";

let mapStateToProps = (state) => {
  return {
    getCurrentMessagesData: (id) => {
      return state.dialogsPage.messagesData[id];
    },
  };
};

const MessagesContainer = connect(mapStateToProps, { addMessage, updateMessage })(Messages);

export default MessagesContainer;
