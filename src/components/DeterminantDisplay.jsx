import React, { Component } from "react";
import { connect } from "react-redux";
import math from "mathjs";

class DeterminantDisplay extends Component {
  render() {
    let isSquare = this.props.rows == this.props.cols;
    let actualMatrix;
    actualMatrix = math.subset(
      this.props.matrix,
      math.index(math.range(0, this.props.rows), math.range(0, this.props.cols))
    );
    console.log(actualMatrix);
    let det = isSquare ? math.det(actualMatrix) : "Matrix must be square";
    return (
      <p>
        Determinant: {det}
      </p>
    );
  }
}

const mapStateToProps = state => ({
  matrix: state.matrixActions.matrix,
  rows: state.matrixActions.rows,
  cols: state.matrixActions.columns
});

export default connect(mapStateToProps)(DeterminantDisplay);
