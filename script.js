//Create function that returns the choice of the computer.
function getComputerChoice() {
    let numOption = Math.random() * (1 - (-1)) + (-1); 
    numOption = numOption.toFixed(0); //round to the closest integer
    let option = numOption > 0 ? 'scissors' :
                 numOption < 0 ? 'rock' :
                 'paper';
    return option;
}

//Create function that returns the choice of the user.

//Create function for the game to be played 5 times

    //Create two variables 'humanScore' and 'computerScore' 

    //Create function that accepts two parameters (humanChoice and ComputerChoice). It has to increment the score of each player for round, and show a text that says something like 'You Won! Rock beats scissors.

    
console.log(getComputerChoice());