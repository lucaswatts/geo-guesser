import React from "react";
import * as Countries from "../data/countries.json";

var totalPlaces = Countries.data.length -1;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  reset() {
    this.setState({ count: this.state.count = 0 });
  }

  
  render() {
    return (
      <div>
        
      </div>
      // <div id="scoreElements">
      //   <h2 id="scoreCounter">Your score is: {this.state.count} out of {totalPlaces} </h2>
      //   <button id="resetBtn" className="btn" onClick={() => this.reset()}>Reset Game</button>
      // </div>
    );
  }
}

export default Counter;
