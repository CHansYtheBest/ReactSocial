import { connect } from "react-redux";
import { compose } from "redux";
import withLoginCheckRedirect from "../../HOC/withLoginCheckRedirect";
import Dialogs from "./dialogsList";

let mapStateToProps = (state) => {
  return {
    dialogData: state.dialogsPage.dialogData,
  };
};

export default compose(connect(mapStateToProps), withLoginCheckRedirect)(Dialogs);
