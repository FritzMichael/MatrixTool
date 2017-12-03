import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import { Plus, Minus } from "mdi-material-ui";
import { cyan200 } from "material-ui/styles/colors";
import { connect } from "react-redux";
import { addRow, removeRow } from "../actions";

const buttonStyle = { width: "20px", margin: 5 };

const Counter = props => {
  return (
    <div>
      <FlatButton
        backgroundColor={cyan200}
        style={buttonStyle}
        icon={<Minus />}
        onClick={props.onClickMinus}
      />
      {props.currentCount}
      <FlatButton
        backgroundColor={cyan200}
        style={buttonStyle}
        icon={<Plus />}
        onClick={props.onClickPlus}
      />
    </div>
  );
};

export default Counter;
