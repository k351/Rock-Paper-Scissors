function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
  /*Return a choice for a computer*/
  let randomNumber = Math.floor(Math.random() * 3);
  
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

  

