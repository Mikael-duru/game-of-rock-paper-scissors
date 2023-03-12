const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const startOrExit = document.querySelector("#startOrExit");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".game_btn-play");
const playerScoreBoard = document.querySelector("#playerScore");
const computerScoreBoard = document.querySelector("#computerScore");

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

// Start or Exit Game Logic
startOrExit.onclick = function(){
  if (startOrExit.textContent == "START") {
    startOrExit.textContent = "EXIT";
    startOrExit.style.backgroundColor = "red";
    // startOrExit.style.marginTop = "2rem";
    document.querySelector(".game_btn-plays").style.display = "flex";
  } else {
    startOrExit.textContent = "START";
    startOrExit.style.backgroundColor = "green";
    // startOrExit.style.marginTop = "1rem";
    document.querySelector(".game_btn-plays").style.display = "none";
    playerText.textContent = "";
    computerText.textContent = "";
    resultText.textContent = "";
    playerScoreBoard.innerHTML = "";
    computerScoreBoard.innerHTML = "";
  }
}

// Play Rock-Paper-Scissors Logic
choiceBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    
    // store player's choice
    player = btn.textContent;

    // invokes computer's choice
    computerChoice();

    // display both players choice and the result
    playerText.textContent = `${player}!`;
    computerText.textContent = `${computer}!`;
    resultText.textContent = showResult();

    // show scores and result color change
    showScores();
  })
});

// Computer Choice Logic
function computerChoice() {
  // Create 3 RANDOM CHOICE options
  const randomNum = Math.floor(Math.random() * 3) + 1;

  switch(randomNum){
    case 1:
      computer = "ROCK"
      break;
    case 2:
      computer = "PAPER"
      break;
    case 3:
      computer = "SCISSORS"
      break;
  }
}

// Show Result Logic
function showResult(){
  if (computer == player){
    return "DRAW!"
  }
  // scissors beats paper
  else if (computer == "PAPER"){
    return (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!"
  }

  // paper beats rock
  else if (computer == "ROCK"){
    return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!"
  }
  // rock beats scissors
  else if (computer == "SCISSORS"){
    return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!"
  }
}

// Show Scores and result color change Logic
function showScores(){
  if (resultText.textContent == "YOU WIN!"){
    resultText.style.color = "green";
    playerScore++;
    playerScoreBoard.innerHTML = playerScore;
  } else if (resultText.textContent == "YOU LOSE!"){
    resultText.style.color = "red";
    computerScore++;
    computerScoreBoard.innerHTML = computerScore;
  } else {
    resultText.style.color = "#212121";
  }
}