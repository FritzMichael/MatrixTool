import Counter from "./Counter";
import { connect } from "react-redux";
import { addRow, removeRow } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    onClickPlus: () => {
      dispatch(addRow());
    },
    onClickMinus: () => {
      dispatch(removeRow());
    }
  };
};

const mapStateToProps = state => ({
  currentCount: state.matrixActions.rows
});

const RowCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default RowCounter;
