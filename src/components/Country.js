import React from 'react';

function Country() {

    const Countries = [
        {
           City: 'Ottawa',
           Country: 'Canada'
        },
        {
            City: 'Belgrade',
            Country: 'Serbia'
        },
        {
            City: 'Stockholm',
            Country: 'Sweden'
        }, 
        {
            City: 'Amsterdam',
            Country: 'The Netherlands'
        },
        {
            City: 'Brussels',
            Country: 'Belgium'
        },
        {
            City: 'Zagreb',
            Country: 'Croatia'
        }
    ]

    function resetGame() {
        const score = document.getElementById('correctAnswers');
        score.innerHTML = 'Good Luck!'
    }

    function pickCountry() {
        const infoHold = document.getElementById('infoHolder');
        var Num = (Math.floor((Math.random() * (Countries.length)-1) + 1));
        const countryOutput = document.getElementById('country');
        countryOutput.innerHTML = Countries[(Num)].City;
        infoHold.innerHTML = Countries[(Num)].Country;
        document.getElementById('answer').value = '';
    }

    function updateScore() {
        console.log('a correct answer was just logged')
        const score = document.getElementById('correctAnswers');
        if (score.innerHTML === 'Good Luck!') {
            score.innerHTML = 1;
        } else {
            score.innerHtml = score.innerHTML ++;
        }
    }


    function check() {
        const Answer = document.getElementById('answer');
        var countryOutput = document.getElementById("country").innerHTML;
        var answerInput = document.getElementById("answer").value;
        var infoHold = document.getElementById('infoHolder').innerHTML;

        if (answerInput === infoHold) {
            var outputMessage = document.getElementById('output');
            console.log('working')
            outputMessage.innerHTML = 'correct!'; 
            pickCountry();
            updateScore();
            
        }
    }

    return (
        <div id="content">
            <p id="country"></p>
            <button id="button1" onClick={pickCountry} type="button">Start</button>
            <input id="answer" placeholder="Guess here..." type="text" onKeyPress={check}></input>
            <button onClick={check} id="checkAnswer">Check Answer</button>
            <p id="output">Guess the Country</p>
            <p id="correctAnswers">Good Luck!</p>
            <p id="infoHolder"></p>
            <button id="reset" onClick={resetGame}>Reset</button>
        </div>
    )
}

export default Country;