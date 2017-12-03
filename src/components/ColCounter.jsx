import Counter from "./Counter";
import { connect } from "react-redux";
import { addColumn, removeColumns } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    onClickPlus: () => {
      dispatch(addColumn());
    },
    onClickMinus: () => {
      dispatch(removeColumns());
    }
  };
};

const mapStateToProps = state => ({
  currentCount: state.matrixActions.columns
});

const ColCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ColCounter;
