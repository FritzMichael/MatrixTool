import { combineReducers } from "redux";
import matrixActions from "./matrixActions";

const matrixApp = combineReducers({
  matrixActions
});

export default matrixApp;
