import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  // Rendering Classes Dynamically
  render() {
    return (
      // React.Fragment can be use if this component not returning parent E.g. div
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
