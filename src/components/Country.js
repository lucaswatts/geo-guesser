import React from "react";
import * as Countries from "../data/countries.json";

function Country() {
  function resetGame() {
    const score = document.getElementById("correctAnswers");
    score.innerHTML = "Good Luck!";
  }

  function pickCountry() {
    const infoHold = document.getElementById("infoHolder");
    var Num = Math.floor(Math.random() * Countries.data.length - 1 + 1);
    const countryOutput = document.getElementById("country");
    countryOutput.innerHTML = Countries.data[Num].City;
    infoHold.innerHTML = Countries.data[Num].Country;
    document.getElementById("answer").value = "";
  }

  function updateScore() {
    console.log("a correct answer was just logged");
    const score = document.getElementById("correctAnswers");
    if (score.innerHTML === "Good Luck!") {
      score.innerHTML = 1;
    } else {
      score.innerHtml = score.innerHTML++;
    }
  }

  function check() {
    const Answer = document.getElementById("answer");
    var countryOutput = document.getElementById("country").innerHTML;
    var answerInput = document.getElementById("answer").value;
    var infoHold = document.getElementById("infoHolder").innerHTML;

    if (answerInput === infoHold) {
      var outputMessage = document.getElementById("output");
      console.log("working");
      outputMessage.innerHTML = "correct!";
      pickCountry();
      updateScore();
    }
  }

  return (
    <div id="content">
      <p id="country">Press start to begin...</p>
      <button id="startBtn" className="btn" onClick={pickCountry} type="button">
        Start
      </button>
      
    <input className="game-input" id="name" type="text" placeholder="City..." />
  

      <button onClick={check} id="checkAnswer" className="btn">
        Check Answer
      </button>
      <p id="message">Press start, and then guess which Country<br></br> the displayed City Belongs to.<br></br> Good luck!</p>
      
    </div>
  );
}

export default Country;
