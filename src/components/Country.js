import React from "react";
import shuffle from "../utilities/shuffle";
import * as countryListJson from "../data/countries.json";

const countries = countryListJson.data;

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      countries: [],
      currentIdx: 0,
      correctGuesses: [],
      gameOver: false,
      // progress: 0,
    };
  }

addGuessedFieldToCountryData = (dataArray) => {
  return dataArray.map((arrayItems) => {
    return {
      city: arrayItems.city,
      country: arrayItems.country,
      guessed: false,
    }
  });
}

  startGame = () => {
    const shuffledCountries = shuffle(countries);
    const gameReadyCountries = this.addGuessedFieldToCountryData(shuffledCountries);

    this.setState({
      countries: gameReadyCountries,
      gameStarted: true,
    });
  };

  newCity() {}

  updateRemainingPlaces() {}

  updateScore() {}

  //we need to clear the input box
  //increment the array position
  //we need to generate a new country
  //we want to increment the users score if correct
  //store whether or not the answer was correct 
  check = (event) => {
    console.log(this.state.countries[this.state.currentIdx].country);
    const input = event.target.value.toLowerCase();
    const country = this.state.countries[this.state.currentIdx].country.toLowerCase();
    if (input === country) {
      const correctGuessesCopy = [...this.state.correctGuesses];
      correctGuessesCopy.push(this.state.currentIdx);
      this.setState({
        currentIdx: this.state.currentIdx + 1,
        score: this.state.score + 1,
        correctGuesses: correctGuessesCopy,
      })
      event.target.value = '';
      if (this.state.currentIdx === correctGuessesCopy.length) {
        this.setState({
          gameOver: true,
        })
      }
    }
  }

  skip = () => {
    this.setState({
      currentIdx: this.state.currentIdx + 1,
    });
  };

  reset() {}

  progressBar() {}

  render() {
    const gameStatus = this.state.gameOver;
    let text;
    if (gameStatus === true) {
      text = <p>GAme is OvEr</p>;
    }

    return (
      <div id="content">
        {text}
        {this.state.gameStarted ? (
          <div id="game-page">
            <p id="country">{this.state.countries[this.state.currentIdx].city}</p>
            <input
              className="game-input"
              onKeyUp={this.check}
              id="name"
              type="text"
              placeholder="City..."
            />
            <p id="score">{this.state.correctGuesses.length}</p>

            <button onClick={this.skip} id="skipBtn" className="btn">
              Skip
            </button>
            {/* <input
              className="game-input"
              onKeyUp={() => this.check()}
              id="name"
              type="text"
              placeholder="City..."
            />
            <p id="skipInfo">-</p>
            <button
              onClick={() => this.check()}
              id="checkAnswer"
              className="btn"
            >
              Check Answer
            </button>
            <button onClick={() => this.skip()} id="skipBtn" className="btn">
              Skip
            </button>

            <div id="scoreElements">
              <h2 id="scoreCount">0</h2>
              <button
                id="resetBtn"
                className="btn"
                onClick={() => this.reset()}
              >
                Reset Game
              </button>
            </div>
            <br></br>
            <p className="bottomLeftText" id="placesRemaining">
              197
            </p>
            <p className="bottomLeftTextTwo">Countries remaining.</p>
            <div id="progressBar"></div> */}
          </div>
        ) : (
          <div id="menu-page">
            <p id="country">Press start to begin</p>

            <button
              id="startBtn"
              className={`btn ${this.state.gameStarted ? "hidden" : ""}`}
              onClick={this.startGame}
              type="button"
            >
              Start
            </button>
          </div>
        )}

        {/* <button
          id="startBtn"
          className={`btn ${this.state.gameStarted ? "hidden" : ""}`}
          onClick={this.startGame}
          type="button"
        >
          Start
        </button>
        <p id="country">Press start to begin</p>
        <input
          className="game-input"
          onKeyUp={this.check}
          id="name"
          type="text"
          placeholder="City..."
        />
        <p id="skipInfo">-</p>
        <button onClick={this.check} id="checkAnswer" className="btn">
          Check Answer
        </button>
        <button onClick={this.skip} id="skipBtn" className="btn">
          Skip
        </button>

        <div id="scoreElements">
          <h2 id="scoreCount">0</h2>
          <button id="resetBtn" className="btn" onClick={this.reset}>
            Reset Game
          </button>
        </div>
        <br></br>
        <p className="bottomLeftText" id="placesRemaining">
          197
        </p>
        <p className="bottomLeftTextTwo">Countries remaining.</p>

        <div id="progressBar"></div> */}
      </div>
    );
  }
}

export default Country;
