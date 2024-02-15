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

const div = document.querySelector(".result");

const rockbtn = document.querySelector(".rock");
rockbtn.addEventListener('click', ()=> {
  let result = playRound("Rock", getComputerChoice());
  div.textContent = result;
})

const paperbtn = document.querySelector(".paper");
paperbtn.addEventListener('click', ()=> {
  let result = playRound("Paper", getComputerChoice())
  div.textContent = result;
})

const scissorsbtn = document.querySelector(".scissors");
scissorsbtn.addEventListener('click', ()=> {
  let result = playRound("Scissors", getComputerChoice())
  div.textContent = result;
})

let playerScore = 0;
let computerScore = 0;

if (div.textContent.startsWith("You Win")) {
  playerScore++;
}
else if (div.textContent.startsWith("You Lose")) {
  computer++;
}

const score = document.querySelector(".score");
score.textContent = 
`Player   : ${playerScore} 
 Computer : ${computerScore }`;