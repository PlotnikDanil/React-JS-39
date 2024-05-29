import React, { Component } from "react";

export default class Child extends Component {
  constructor() {
    super();
    this.state = {
      btnDisabled: true,
    };
  }

  buttonDesabled = () => {
    this.setState(!this.state.btnDisabled);
  };

  render() {
    return (
      <div>
        {/^реакт$/.test(this.props.value) ? (
          <button
            disabled={this.buttonDesabled}
            style={{
              padding: 0.8 + "rem",
              pointerEvents: "auto",
              border: "none",
              color: "green",
              cursor: "pointer",
            }}
          >
            Отправить
          </button>
        ) : (
          <button
            disabled={this.buttonDesabled}
            style={{
              padding: 0.8 + "rem",
              pointerEvents: "none",
              border: "none",
            }}
          >
            Недоступно
          </button>
        )}
      </div>
    );
  }
}
