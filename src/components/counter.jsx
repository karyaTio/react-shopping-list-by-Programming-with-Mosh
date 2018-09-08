import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      // React.Fragment can be use if this component not returning parent E.g. div
      <div>
        <span style={{ fontSize: 20 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>

        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
