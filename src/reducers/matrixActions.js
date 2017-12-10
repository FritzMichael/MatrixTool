import update from "immutability-helper";

let newMatrix;
const matrixApp = (
  state = {
    rows: 3,
    columns: 3,
    maxRows: 3,
    maxColumns: 3,
    matrix: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
  },
  action
) => {
  switch (action.type) {
    case "ADD_ROW":
      newMatrix = new Array(state.matrix.length + 1);
      let newArray = [];
      for (let index = 0; index < state.columns; index++) {
        newArray[index] = 0;
      }
      for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = index < state.matrix.length
          ? state.matrix[index]
          : newArray;
      }
      let isNewMax = state.rows + 1 > state.maxRows;
      return {
        ...state,
        matrix: isNewMax ? newMatrix : state.matrix,
        maxRows: Math.max(state.rows + 1, state.maxRows),
        rows: state.rows + 1
      };

    case "REM_ROW":
      return {
        ...state,
        rows: state.rows - 1
      };

    case "ADD_COL":
      newMatrix = new Array(state.matrix.length);
      for (let index = 0; index < state.matrix.length; index++) {
        newMatrix[index] = state.matrix[index].concat([0]);
      }
      isNewMax = state.columns + 1 > state.maxColumns;
      return {
        ...state,
        matrix: isNewMax ? newMatrix : state.matrix,
        maxColumns: Math.max(state.columns + 1, state.maxColumns),
        columns: state.columns + 1
      };

    case "REM_COL":
      return {
        ...state,
        columns: state.columns - 1
      };

    case "UPDATE_CELL":
      let rowIndex = action.key.row;
      let columnIndex = action.key.column;
      let newState = update(state, {
        matrix: {
          [rowIndex]: {
            [columnIndex]: { $set: action.newValue }
          }
        }
      });
      return newState;

    default:
      return state;
  }
};

export default matrixApp;
