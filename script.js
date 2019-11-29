let game = () => {

  let rounds = 1;
  let playerPoints = 0;
  let computerPoints = 0;

  let computerPlay = () => {
    const choices = ['Rock','Paper','Scissors'];
    let choice = Math.floor(Math.random()*Math.floor(3));
    return choices[choice]; 
  };

  let playerChoice = () => {
    let playerInput = prompt('Hello! Would you like to choose Rock, Paper, or Scissors?');
    return playerInput.trim().charAt(0).toUpperCase() + playerInput.trim().toLowerCase().slice(1);
  };

  let playRound = (playerSelection, computerSelection) => {
    let result = 'Sorry, please try again';
    if (playerSelection === computerSelection) {
      result = 'Tie! Both of you chose the same option!';
    }
    else if(playerSelection === 'Rock') {
      if(computerSelection === 'Paper') {
        result = 'You lose! Paper beats Rock.';
        computerPoints = computerPoints + 1;
      }
      else {
        result = 'You win! Rock beats Scissors.';
        playerPoints = playerPoints + 1;
      }
    }
    else if(playerSelection === 'Paper') {
      if(computerSelection === 'Rock') {
        result = 'You win! Paper beats Rock.';
        playerPoints = playerPoints + 1;
      }
      else {
        result = 'You lose! Scissors beats Paper.';
        computerPoints = computerPoints + 1;
      }
    }
    else if(playerSelection === 'Scissors') {
      if(computerSelection === 'Paper') {
        result = 'You win! Scissors beats Paper.';
        playerPoints = playerPoints + 1;
      }
      else{
        result = 'You lose! Rock beats Scissors.';
        computerPoints = computerPoints + 1;
      }
    }
    result =  "Round " + rounds + ": " + result;
    console.log(result);
    return result;
  };

  while(rounds < 6) {
    playRound(playerChoice(), computerPlay());
    rounds = rounds + 1;
    
  }
  if(playerPoints > computerPoints) {
    return "You beat the computer in a best of 5 rounds!";
  }
  else if(computerPoints > playerPoints) {
    return "You lost to the computer in a best of 5 rounds!";
  }
  else {
    return "Its a tie! Try again.";
  }

}
console.log(game());