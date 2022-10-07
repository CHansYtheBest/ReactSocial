import { connect } from "react-redux";
import { compose } from "redux";
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

export default compose(connect(mapStateToProps, mapDispatchToProps), withLoginCheckRedirect)(Dialogs);
