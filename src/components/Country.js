import React from "react";
import * as Countries from "../data/countries.json";

var countryList = Countries
var listLength = Countries.data.length;
const cityDisplay = document.getElementById('country');

class Country extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    randNum: 1,
  };
}

  startGame() {
    const cityDisplay = document.getElementById('country');
    const startBtn = document.getElementById('startBtn');
    this.setState({ randNum: this.state.randNum = Math.floor(Math.random() * Countries.data.length -1 + 1)})
    console.log('game starting');
    cityDisplay.innerHTML = Countries.data[this.state.randNum].City;
    startBtn.classList.add('inactive');
  }

  check() {
    const countryInput = document.getElementById('game-input');
    const city = document.getElementById('country');
    if (countryInput.value === Countries.data[this.state.randNum].Country){
      console.log(Countries.data[this.state.randNum].Country)
    }
    Countries.data.splice(1,1);
  }

  skip() {
    console.log('skip');
    console.log(this.state.randNum)
  }


  render() {
  return (
    <div id="content">
       <button id="startBtn" className="btn" onClick={() => this.startGame()} type="button">
        Start
      </button>
      <p id="country">Press start to begin...</p>
      <input className="game-input" id="name" type="text" placeholder="City..." />
      <button onClick={() => this.check()} id="checkAnswer" className="btn">
        Check Answer
      </button>
      <button onClick={() => this.skip()} id="skipBtn" className="btn">
        Skip
      </button>
      <p id="message">Press start, and then guess which Country the displayed City Belongs to.<br></br> Good luck!</p>
      
    </div>
  );
  }
}

export default Country;
