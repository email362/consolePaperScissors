let computerPlay = () => {
  const choices = ['Rock','Paper','Scissors'];
  let choice = Math.floor(Math.random()*Math.floor(3));
  return choices[choice]; 
};

let playRound = (playerSelection, computerSelection) => {
  let result = 'Sorry, please try again';
  if (playerSelection === computerSelection) {
    result = 'Tie! Both of you chose the same option!';
  }
  else if(playerSelection === 'Rock') {
    if(computerSelection === 'Paper') {
      result = 'You lose! Paper beats Rock.';
    }
    else {
      result = 'You win! Rock beats Scissors.';
    }
  }
  else if(playerSelection === 'Paper') {
    if(computerSelection === 'Rock') {
      result = 'You win! Paper beats Rock.';
    }
    else {
      result = 'You lose! Scissors beats Paper.';
    }
  }
  else if(playerSelection === 'Scissors') {
    if(computerSelection === 'Paper') {
      result = 'You win! Scissors beats Paper.';
    }
    else{
      result = 'You lose! Rock beats Scissors.';
    }
  } 
  return result;
};
