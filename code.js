function toCapitalize(string) {
  var newString = string[0].toUpperCase() + string.slice(1)
  return newString
}

function getComputerChoice() {
  /*Return a choice for a computer*/
  var randomNumber = Math.floor(Math.random() * 3);
  
  // Use the random number to determine the computer's choice
  switch (randomNumber) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }

}

function singleRound(playerSelection, computerSelection) {
  playerSelection = toCapitalize(playerSelection);
  computerSelection = toCapitalize(computerSelection);
  let message = ""

  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    message = "You Win! " + playerSelection + " beats " + computerSelection
  }
  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    message = "You Win! " + playerSelection + " beats " + computerSelection
  }
  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    message = "You Win! " + playerSelection + " beats " + computerSelection
  }
  else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    message = "You Lose! " + computerSelection + " beats " + playerSelection
  }
  else if (playerSelection === "Rock" && computerSelection === "Paper") {
    message = "You Lose! " + computerSelection + " beats " + playerSelection
  }
  else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    message = "You Lose! " + computerSelection + " beats " + playerSelection
  }
  else if (playerSelection === computerSelection){
    return "Draw!"
  }

  return message;
}

function playGame() {
  let playerWins = 0;
  let computerWins = 0;
  
  for (let i = 1; i <= 5; i++) {
    let player = prompt("Pick your choice: ")
    let computer = getComputerChoice()
    
    let roundResult = singleRound(player, computer)

    console.log("Round " + (i) + ": " + roundResult)
    
    if (roundResult.startsWith("You Win!")) {
      playerWins++;
    } else if (roundResult.startsWith("You Lose!")) {
      computerWins++;
    }
    }

  if (playerWins > computerWins) {
    console.log("You win the game!");
  } 
  else if (playerWins < computerWins) {
    console.log("You lose the game!");
  } 
  else {
    console.log("The game ends in a draw!");
  }

}

playGame()
    
  

