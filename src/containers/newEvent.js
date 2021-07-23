import { connect } from "react-redux";
import newEvent from "../components/newEvent";
import { addEvent } from "../redux/actions/actions";

const dispatchStateToProps = {
  addEvent,
};

export default connect(null, dispatchStateToProps)(newEvent);