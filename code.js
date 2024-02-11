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