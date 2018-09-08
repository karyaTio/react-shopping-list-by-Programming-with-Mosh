import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      // React.Fragment can be use if this component not returning parent E.g. div
      <React.Fragment>
        <h1>Hello World </h1> <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
