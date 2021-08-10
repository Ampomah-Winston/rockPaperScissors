const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  userInput = 
      userInput === 'rock' ? 'rock':
      userInput === 'paper' ? 'paper':
      userInput === 'scissors' ? 'scissors':
      console.log('Error! invalid input')
  return userInput;
}

const getComputerChoice =()=>{
   switch(Math.floor(Math.random()*3)){
     case 0: 
        return 'rock'
     break;
     case 1:
        return 'paper'
      break;
     case 2:
        return 'scissors'
      break;
   }
}

const determineWinner = (userChoice,compChoice)=>{ 
   console.log(`user  ${userChoice} || computer  ${compChoice}`)
  if(userChoice === compChoice){
     return 'A tie'
  }else if(userChoice === 'rock' && compChoice === 'scissors'){
    return 'You won'
  }else if(userChoice === 'rock' && compChoice === 'paper'){
    return 'You lost'
  }else if(userChoice === 'bomb'){
    return 'You won'
  }
}

console.log(determineWinner(getUserChoice('rock'),getComputerChoice()))
const playGame = () =>{
  let userChoice = getUserChoice('rock');
  console.log(userChoice)
  let computerChoice = getComputerChoice()
  console.log(computerChoice)
  console.log(determineWinner(userChoice,computerChoice))
}