import React, { Component } from "react";
import MatrixRow from "./MatrixRow";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  rows: state.matrixActions.rows
});

class InputMatrix extends Component {
  render() {
    let rowCount = this.props.rows;
    console.log(rowCount);
    let rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(<MatrixRow row={i} />);
    }
    return (
      <div>
        <table>
          {rows}
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(InputMatrix);
