var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// The init function is called when the page loads 
function init() {

}

// The startGame function is called when the start button is clicked
function startGame() {
  startTimer();
  blanksLetters = [];
  renderBlanks ();
}

// The winGame function is called when the win condition is met
function winGame() {
  
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  timerCount = 10;
  timer = setInterval(function (){
    if (timerCount > 0) {
      timerElement.textContent = timerCount;
      timerCount--;
    } else if (timerCount === 1){
      timerEl.textContent = timerCount;
      timerCount--;
    } else {
      timerElement.textContent = 0
      clearInterval (timer);
    }
  
    }, 1000);
  }

// Creates blanks on screen
function renderBlanks() {
 chosenWord = words[Math.floor(Math.random() * words.length)]; 
 var chosenWordSplit = chosenWord.split("")
 console.log(chosenWordSplit)
 for (var i = 0; i < chosenWordSplit.length; i++) {
    blanksLetters.push("_")
 }
 console.log(blanksLetters)
 wordBlank.innerHTML = blanksLetters.join(" ");
}

// Updates win count on screen and sets win count to client storage
function setWins() {
  
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {

}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");

}

function checkWin() {

}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false;
  
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
 var keyPressed = event.key;  
 console.log(keyPressed)
});


// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {

}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
