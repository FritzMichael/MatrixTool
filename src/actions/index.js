export const addRow = () => {
  return {
    type: "ADD_ROW"
  };
};
export const removeRow = () => {
  return {
    type: "REM_ROW"
  };
};
export const addColumn = () => {
  return {
    type: "ADD_COL"
  };
};
export const removeColumns = () => {
  return {
    type: "REM_COL"
  };
};

export const updateCell = (e, newValue, key) => {
  return {
    type: "UPDATE_CELL",
    key,
    newValue
  };
};
