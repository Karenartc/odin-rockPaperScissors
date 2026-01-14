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
function getHumanChoice(){
    let userOption = prompt("Tell me your choice (rock, paper or scissors): ");
    return userOption.toLowerCase();
}

//Create function for the game to be played 5 times
function playGame(){
    //Create two variables 'humanScore' and 'computerScore' 
    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    //Create function that accepts two parameters (humanChoice and ComputerChoice). It has to increment the score of each player for round, and show a text that says something like 'You Won! Rock beats scissors.
    function playRound(computerChoice, humanChoice){
        if(computerChoice == humanChoice){
            alert(`You both played ${computerChoice}, No one score a point.`);
            return 'tie';
        } else if((computerChoice == 'rock') && (humanChoice == 'scissors')){
            alert('You lost! Rock beats scissors.');
            return 'computer';
        } else if((computerChoice == 'paper') && (humanChoice == 'rock')){
            alert('You lost! Paper beats rock.');
            return 'computer';
        } else if((computerChoice == 'scissors') && (humanChoice == 'paper')){
            alert('You lost! Scissors beats paper.');
            return 'computer';
        } else if((humanChoice == 'rock') && (computerChoice == 'scissors')){
            alert('You Won! Rock beats scissors.');
            return 'human';
        } else if((humanChoice == 'paper') && (computerChoice == 'rock')){
            alert('You Won! Paper beats rock.');
            return 'human';
        } else if((humanChoice == 'scissors') && (computerChoice == 'paper')){
            alert('You Won! Scissors beats paper.');
            return 'human';
        }
    }

    //loop for the game to be played 5 times
    for(let i=1; i<=5; i++){
        let winner = playRound(getComputerChoice(), getHumanChoice());
        if (winner == 'computer') {
            computerScore += 1;
        }else if (winner == 'human'){
            humanScore += 1;
        }else if (winner == 'tie'){
            tieScore +=1;
        }
    }

    //last message to the user with finals scores
    alert(`Your score: ${humanScore} vs computer score: ${computerScore}. You both tied ${tieScore} times.`);
}
    
playGame();