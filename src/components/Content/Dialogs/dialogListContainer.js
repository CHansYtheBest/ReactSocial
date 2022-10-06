import { connect } from "react-redux";
import withLoginCheckRedirect from "../../HOC/withLoginCheckRedirect";
import Dialogs from "./dialogsList";

let mapStateToProps = (state) => {
  return {
    dialogData: state.dialogsPage.dialogData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

let DialogsAuth = withLoginCheckRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsAuth);

export default DialogsContainer;
