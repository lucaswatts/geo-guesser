import React from "react";
import * as Countries from "../data/countries.json";

var countryList = Countries
var listLength = Countries.data.length;
const cityDisplay = document.getElementById('country');

class Country extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    randNum: 0,
    score: 0,
    progress: 0,
  };
}

  startGame() {
    const cityDisplay = document.getElementById('country');
    const startBtn = document.getElementById('startBtn');
    this.setState({ randNum: this.state.randNum = Math.floor(Math.random() * Countries.data.length)+1})
    console.log('game starting');
    cityDisplay.innerHTML = Countries.data[this.state.randNum].City;
    startBtn.classList.add('inactive');
  }


  newCity() {
    const cityDisplay = document.getElementById('country');
    this.setState({ randNum: this.state.randNum = Math.floor(Math.random() * Countries.data.length) +1})
    console.log('game starting');
    cityDisplay.innerHTML = Countries.data[this.state.randNum].City;
  }

  updateRemainingPlaces() {
    const placesRemaining = document.getElementById('placesRemaining');
    placesRemaining.innerHTML = Countries.data.length;
  }

  updateScore() {
    const score = document.getElementById('scoreCount');
    score.innerHTML = this.state.score;
  }

  check() {
    const countryInput = document.getElementById('name');
    const city = document.getElementById('country');

    if (countryInput.value == Countries.data[this.state.randNum].Country){
      console.log(Countries.data[this.state.randNum].Country);
      Countries.data.splice(this.state.randNum,1);
      this.newCity();
      this.state.score = this.state.score +1;
      this.updateScore();
      countryInput.value = '';
    }
    console.log(Countries.data[this.state.randNum].Country);
    console.log(Countries.data.length);
    console.log(this.state.randNum);
    this.updateRemainingPlaces();
  }

  skip() {
    const cityDisplay = document.getElementById('country');
    const displaySkipped = document.getElementById('skipInfo');
    displaySkipped.innerHTML = `${Countries.data[this.state.randNum].City} is the capital city of ${Countries.data[this.state.randNum].Country}.`;
    this.setState({ randNum: this.state.randNum = Math.floor(Math.random() * (Countries.data.length)+1)})
    console.log('skipping...');
    Countries.data.splice(this.state.randNum,1);
    cityDisplay.innerHTML = Countries.data[this.state.randNum -1].City;
    this.updateRemainingPlaces();
    this.progressBar();
    console.log(Countries.data.length);
    console.log(this.state.randNum);
  }

  reset() {
    const country = document.getElementById('country');
    const input = document.getElementById('name');
    const startBtn = document.getElementById('startBtn');
    country.innerHTML = 'You reset geo quiz. Press start to begin';
    input.value = 'City...';
    startBtn.classList.remove('inactive');
    this.state.score = 0;
  }
  
  progressBar() {
   const bar = document.getElementById('progressBar');
   this.state.progress = this.state.progress + 0.5076;
   bar.style.width = `${this.state.progress}%`;
  }

  render() {
  return (
    <div id="content">
       <button id="startBtn" className="btn" onClick={() => this.startGame()} type="button">
        Start
      </button>
      <p id="country">Press start to begin</p>
      <input className="game-input" onKeyUp={() => this.check()} id="name" type="text" placeholder="City..." />
      <p id="skipInfo">-</p>
      <button onClick={() => this.check()} id="checkAnswer" className="btn">
        Check Answer
      </button>
      <button onClick={() => this.skip()} id="skipBtn" className="btn">
        Skip
      </button>

      <div id="scoreElements">
       <h2 id="scoreCount">0</h2> 
        <button id="resetBtn" className="btn" onClick={() => this.reset()}>Reset Game</button>
      </div>
      {/* <p className="bottomLeftText" id="message">Press start, and then guess which Country the displayed City Belongs to.<br></br> Good luck!</p> */}
      <br></br>
      <p className="bottomLeftText" id="placesRemaining">197</p><p className="bottomLeftTextTwo">Countries remaining.</p>
      
      <div id="progressBar"></div>
    </div>
  
    
  );
  }
}

export default Country;
