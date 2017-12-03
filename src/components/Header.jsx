import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

class Header extends Component {
  render() {
    return (
      <AppBar
        title="Matrix Pro"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        showMenuIconButton={false}
      />
    );
  }
}

export default Header;
