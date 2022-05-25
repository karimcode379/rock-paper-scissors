'use strict'

// calculation variables
let roundCounter = 0;
let userCounter = 0;
let compCounter = 0;

// output variables
const currentRound = document.getElementById('currentRound');
const finalRound = document.getElementById('finalRound');
const userScore = document.getElementById('userScore');
const compScore = document.getElementById('compScore');
const myChoiceOutput = document.getElementById('myChoiceOutput');
const compChoiceOutput = document.getElementById('compChoiceOutput');
const resultOutput = document.getElementById('resultOutput');
const finalResultOutput = document.getElementById('finalResultOutput');

//design variables
const roundchoices = document.getElementById('roundchoices');
const counterDisplay = document.getElementById('counterDisplay');
const choices = document.querySelectorAll("#rock, #paper, #scissors");
const lastWill = document.getElementById('lastWill');
const popupEnd = document.getElementById('popupEnd')
const buttons = document.getElementById('buttons');
const hahaText = document.getElementById('hahaText');
const play = document.getElementById('play');

const battle = userChoice => {
    // input variables
    const rounds = Number(document.querySelector('input[name="rounds"]:checked').value);

    // computer choice variables (generate computer's choice)
    const randomNumber = Math.floor(Math.random() * 3);
    let compChoice = '';

    // increase no of played rounds
    roundCounter += 1;

    //  computer's choice allocation to a word
    switch (randomNumber) {
        case 0:
            compChoice = 'rock';
            break;
        case 1:
            compChoice = 'paper';
            break;
        case 2:
            compChoice = 'scissors';
            break;
    }

    //remove animation colors from previous rounds and triggering reflow
    choices.forEach(element => element.classList.remove('green', 'red', 'grey'));
    choices.forEach(element => void element.offsetWidth);

    // compare user choice with computer choice
    if (userChoice === compChoice) {
        resultOutput.innerHTML = 'It is a tie! Looks live you have been given a chance...'
        document.getElementById(userChoice).classList.add('grey');
    } else if (userChoice === 'rock' && compChoice === 'scissors' || userChoice === 'paper' && compChoice === 'rock' || userChoice === 'scissors' && compChoice === 'paper') {
        userCounter += 1;
        resultOutput.innerHTML = 'You won this round. How long will your luck last...?'
        document.getElementById(userChoice).classList.add('green');
    } else {
        compCounter += 1;
        resultOutput.innerHTML = 'You lost! Nothing else to expect from a lowly human!'
        document.getElementById(userChoice).classList.add('red');
    }

    //check number of rounds & compare user score and computer score
    if (roundCounter === rounds) {
        buttons.style.display = 'none';
        popupEnd.style.display = 'block';
        if (userCounter === compCounter) {
            finalResultOutput.innerHTML = 'The game ended in a tie. That means you are forced to play again!'
        } else if (userCounter > compCounter) {
            finalResultOutput.innerHTML = 'Unbelievable! How can a such low creature like you win against me? Well, congratulations...'
        } else {
            finalResultOutput.innerHTML = 'HA HA HA HA! As expected! DIE!'
        }
    }

    //output of rounds, scores & choices
    currentRound.innerHTML = roundCounter;
    finalRound.innerHTML = rounds;
    userScore.innerHTML = userCounter;
    compScore.innerHTML = compCounter;
    myChoiceOutput.innerHTML = userChoice;
    compChoiceOutput.innerHTML = compChoice;

    //change display
    roundchoices.style.display = 'none';
    hahaText.style.display = 'none';
    lastWill.style.display = 'none';
    counterDisplay.style.display = 'flex';
    play.style.display = 'block';
}

// change everything back to normal for a new round
let newGame = () => {
    roundCounter = 0;
    userCounter = 0;
    compCounter = 0;
    userScore.innerHTML = 0;
    compScore.innerHTML = 0;
    roundchoices.style.display = 'grid';
    hahaText.style.display = 'block';
    lastWill.style.display = 'block';
    counterDisplay.style.display = 'none';
    play.style.display = 'none';
    buttons.style.display = 'flex';
    popupEnd.style.display = 'none';
}