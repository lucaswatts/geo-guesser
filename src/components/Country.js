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
    score: 0,
    progress: 0,
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


  newCity() {
    const cityDisplay = document.getElementById('country');
    this.setState({ randNum: this.state.randNum = Math.floor(Math.random() * Countries.data.length -1 + 1)})
    console.log('game starting');
    cityDisplay.innerHTML = Countries.data[this.state.randNum].City;
  }

  updateRemainingPlaces() {
    const placesRemaining = document.getElementById('placesRemaining');
    placesRemaining.innerHTML = Countries.data.length -1;
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
    this.updateRemainingPlaces();
  }

  skip() {
    const cityDisplay = document.getElementById('country');
    this.setState({ randNum: this.state.randNum = Math.floor(Math.random() * Countries.data.length -1 + 1)})
    console.log('skipping...');
    Countries.data.splice(this.state.randNum,1);
    cityDisplay.innerHTML = Countries.data[this.state.randNum].City;
    
    this.updateRemainingPlaces();
    this.progressBar();
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
      <button onClick={() => this.check()} id="checkAnswer" className="btn">
        Check Answer
      </button>
      <button onClick={() => this.skip()} id="skipBtn" className="btn">
        Skip
      </button>

      <div id="scoreElements">
        <h2 id="scoreCounter">Your score is: <h2 id="scoreCount">0</h2> out of 197 </h2>
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
