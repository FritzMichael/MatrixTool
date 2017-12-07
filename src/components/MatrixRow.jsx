import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { updateCell } from "../actions";

const textFieldStyle = {
  width: "100%"
};

const textFieldInputStyle = {
  textAlign: "center"
};

const mapStateToProps = state => ({
  columns: state.matrixActions.columns
});

const mapDispatchToProps = dispatch => {
  return {
    onChange: (e, newValue, key) => {
      dispatch(updateCell(e, newValue, key));
    }
  };
};

class MatrixRow extends Component {
  render() {
    let columnCount = this.props.columns;
    let rows = [];
    for (let i = 0; i < columnCount; i++) {
      rows.push(
        <td>
          <TextField
            style={textFieldStyle}
            defaultValue={this.props.row === i ? 1 : 0}
            id = {this.props.row + "," + i}
            onChange={(e, newValue) =>
              this.props.onChange(e, newValue, {
                row: this.props.row,
                column: i
              })}
            inputStyle={textFieldInputStyle}
          />
        </td>
      );
    }
    return (
      <div>
        <tr>
          {rows}
        </tr>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatrixRow);
