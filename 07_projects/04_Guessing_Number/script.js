let randomNumber = Math.round((Math.random() * 100) + 1);
// console.log(randomNumber);

const userInput = document.querySelector("#GuessField");
const submitButton = document.querySelector("#subt");
const prevGuessess = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startAgain = document.querySelector(".resultParas");

const para = document.createElement("p");

let allGuesses = [];
let numOfGuesses = 0;

let playGame = true;

if(playGame){
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(guess > 100){
        alert(`Please enter a number lesser than 100`);
    }
    else if(guess <= 0){
        alert(`Please enter a number greater than 0`);
    }
    else{
        allGuesses.push(guess);
        if(numOfGuesses === 9){
            UpdatingGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }
        else{
            UpdatingGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Won and guessed it right...!!`);
    }
    else if(guess < randomNumber){
        displayMessage(`Your Number is too Lower than random Number`);
    }
    else if(guess > randomNumber){
        displayMessage(`Your Number is too Higher than random Number`);
    }
}

function UpdatingGuess(guess){
    userInput.value = "";
    prevGuessess.innerHTML += `${guess}, `;
    numOfGuesses ++;
    remainingGuesses.innerHTML = `${10 - numOfGuesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    para.classList.add("button");
    para.innerHTML = `<h2 id="new-game">Start new game</h2>`;
    startAgain.appendChild(para);
    playGame = false;
    newGame();
}

function newGame(){
    const startAgainButton = document.querySelector("#new-game");
    startAgainButton.addEventListener("click", function(e){
        randomNumber = Math.round((Math.random() * 100) + 1);
        allGuesses = [];
        numOfGuesses = 0;
        prevGuessess.innerHTML = "";
        remainingGuesses.innerHTML = `${10 - numOfGuesses}`;
        userInput.removeAttribute("disabled");
        startAgain.removeChild(para);

        playGame = true;
    })
    
}