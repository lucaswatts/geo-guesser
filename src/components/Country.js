import React from "react";
import shuffle from "../utilities/shuffle";
import * as countryListJson from "../data/countries.json";

const countries = countryListJson.data;

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      gameOver: false,
      countries: [],
      currentIdx: 0,
      correctGuesses: [],
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

  checkGameStatus() {
    if (this.state.currentIdx === countries.length -1) {
      this.endGame();
    }
  }

  endGame = () => {
    this.setState({
      gameStarted: this.state.gameStarted = false,
      gameOver: this.state.gameOver = true,
    });
  }

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
      if (this.state.currentIdx === countries.length -1) {
        this.checkGameStatus();
      }
    }
  }

  skip = () => {
    this.setState({
      currentIdx: this.state.currentIdx + 1,
    });
  };

  seeResults = () => {
    console.log(countries)
  }
  resetGame = () => {
    this.setState({
      gameOver: false,
      gameStarted: false,
    })
  }


  progressBar() {}
//add if index is at the end, display the game over page
  render() {

  //if game is over, show game over page
  //if game is not over and the game has started, show the game content 
  //if the game has not started and the game is not over, show the pre game content
    const gameOver = this.state.gameOver;
    const gameStarted = this.state.gameStarted;
    let page;
    if (gameOver && !gameStarted) {
      page = (
        <div id="gameOverPage">
          <p id="gameOverMsg">Game Over.</p>
          <button id="seeResults" onClick={this.seeResults} className="btn">
            See my Results
          </button>
          <button
              id="startBtn"
              className={`btn ${this.state.gameStarted ? "hidden" : ""}`}
              onClick={this.resetGame}
              type="button"
            >
              Start
            </button>
        </div>
      )
    }

    else if (!gameOver && gameStarted) {
      page = (
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

            <button onClick={this.endGame} id="endGameBtn" className="btn">
              End Game
            </button>
            
          </div>
      )
    } 

    else if (!gameOver && !gameStarted) {
      page = (
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
      )
    }

    return (
      <div id="content">
        {page}

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
