import React, { Component, createRef } from "react";
import FirstLessonChild from "./FirstLessonChild.jsx";
import InputFocusButton from "./InputFocusButton.jsx";
import DrawingList from "./DrawingList.jsx";

class Lesson_1 extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.inputRef = createRef(null);
    console.log("constructor");
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <form action="">
          <label
            htmlFor="inpt"
            style={{ display: "block", marginBottom: 1 + "rem" }}
          >
            Поле для ввода
          </label>
          <input
            ref={this.inputRef}
            type="text"
            id="inpt"
            style={{ marginBottom: 1 + "rem" }}
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <FirstLessonChild value={this.state.value} />
        </form>
        <InputFocusButton focusInput={this.focusInput} />
        <ul>
          <DrawingList />
        </ul>
      </div>
    );
  }
}

export default Lesson_1;
