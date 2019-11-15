let computerPlay = () => {
  const choices = ['Rock','Paper','Scissors'];
  let choice = Math.floor(Math.random()*Math.floor(3));
  return choices[choice]; 
};
