import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
    };
  }

  add() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h3>The current Count is {this.state.count}</h3>

        <button onClick={() => this.add()}>Add</button>
      </div>
    );
  }
}

export default Clock;
