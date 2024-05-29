import React, { Component } from "react";

export default class InputFocuseButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.focusInput}
        style={{
          marginTop: "1rem",
          padding: 0.8 + "rem",
          pointerEvents: "auto",
          border: "none",
          color: "green",
          cursor: "pointer",
        }}
      >
        Focuse Input
      </button>
    );
  }
}
