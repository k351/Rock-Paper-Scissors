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

function playRound(playerSelection, computerSelection) {
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

let playerScore = 0;
let computerScore = 0;

const div = document.querySelector(".result");
const main = document.querySelector("#main");

main.addEventListener("click", (event) => {
  let target = event.target;
  let result;
  
  if (playerScore !== 5 && computerScore !== 5)
  {
    switch (target.id) {
      case "rock":
        result = playRound("Rock", getComputerChoice());
        div.textContent = result;
        break;
      case "paper":
        result = playRound("Paper", getComputerChoice())
        div.textContent = result;
        break;
      case "scissors":
        result = playRound("Scissors", getComputerChoice())
        div.textContent = result;
        break;
    }

    if (div.textContent.startsWith("You Win")) {
      playerScore++;
    }
    else if (div.textContent.startsWith("You Lose")) {
      computerScore++;
    }
  }

  const score = document.querySelector(".score");
  score.textContent = 
  `Player   : ${playerScore} 
  Computer : ${computerScore }`;

})

if(playerScore === 5)  {
  div.textContent = "Player win!";
}
else if (computerScore === 5) {
  div.textContent = "Computer win!"
}



