import update from "immutability-helper";

const matrixApp = (
  state = { rows: 3, columns: 3, matrix: [[], [], []] },
  action
) => {
  switch (action.type) {
    case "ADD_ROW":
      return {
        ...state,
        rows: state.rows + 1
      };

    case "REM_ROW":
      return {
        ...state,
        rows: state.rows - 1
      };

    case "ADD_COL":
      return {
        ...state,
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
