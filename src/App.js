import React, { Component } from "react";
import Header from "./components/Header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import InputMatrix from "./components/InputMatrix";
import ColCounter from "./components/ColCounter";
import RowCounter from "./components/RowCounter";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <InputMatrix />
          <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <RowCounter />
            <ColCounter />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
