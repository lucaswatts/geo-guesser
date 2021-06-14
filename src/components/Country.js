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

    };
  }

// addGuessedFieldToCountryData = (dataArray) => {
//   return dataArray.map((arrayItems) => {
//     return {
//       city: arrayItems.city,
//       country: arrayItems.country,
//       guessed: false,
//     }
//   });
// }

  startGame = () => {
    const shuffledCountries = shuffle(countries);
    // const gameReadyCountries = this.addGuessedFieldToCountryData(shuffledCountries);

    this.setState({
      countries: shuffledCountries,
      gameStarted: true,
      currentIdx: 0,
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
    
  }


  resetGame = () => {
    this.setState({
      gameOver: false,
      gameStarted: false,
    })
  }

  // renderCountryData = () => {
  //   return this.state.countries.map((place) => {
  //     const { country, city } = place;
  //     return (
  //       <tr key={country}>
  //         <td>{city}</td>
  //         </tr>

  //     )
  //   })
  // }


  render() {

    const gameOver = this.state.gameOver;
    const gameStarted = this.state.gameStarted;
    let page;
    if (gameOver && !gameStarted) {
      page = (
        <div id="gameOverPage">
          <p id="gameOverMsg">Game Over.</p>
          <p id="scoreMsg">Your score is {this.state.correctGuesses.length}.</p>
          {/* <button id="seeResults" onClick={this.seeResults} className="btn">
            See my Results
          </button> */}
          {/* <tbody className="inactive" id="gameResults">
            {this.renderCountryData()}
          </tbody> */}
          <button
              id="startBtn"
              className={`btn ${this.state.gameStarted ? "hidden" : ""}`}
              onClick={this.resetGame}
              type="button"
            >
              Return to Main Menu
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
              placeholder="Guess the country..."
            />
            <p id="score">{this.state.correctGuesses.length}</p>

            <button onClick={this.skip} id="skipBtn" className="btn">
              Skip
            </button>

            <button onClick={this.endGame} id="endGameBtn" className="btn">
              End Game
            </button>
            <p id="countryTracker">You are on Country {this.state.currentIdx} out of 197.</p>
            <div id="progressBar"></div>
      
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
            <p id="startMsg">Geo quiz will show you a random City from one of the world's Countries. Try and guess which Country the City belongs to. Good luck!</p>
          </div>
      )

    }

    return (
      <div id="content">
        {page}
      </div>
    );
  }
}

export default Country;
