//Select the elements from the html to the DOM      
const humanTextScore = document.querySelector(".userSide h3");
const humanButtonsCOntainer = document.querySelector('.buttonsUser');
const humanButtons = document.querySelectorAll(".buttonsUser img");
const computerButtonsCOntainer = document.querySelector('.buttonsComputer');
const computerButtons = document.querySelectorAll(".buttonsComputer img");
const computerTextScore = document.querySelector(".computerSide h3");
const resultSection = document.querySelector(".resultSection");
const firstTextUpdateForRound = document.querySelector(".resultSection .firstText");
const secondTextUpdateForRound = document.querySelector(".resultSection .secondText");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;
let playAgainBtn = null;
let statusText = null;

//Create function that returns the choice of the computer.
function getComputerChoice() {
    let numOption = Math.random() * (1 - (-1)) + (-1); 
    numOption = numOption.toFixed(0); //round to the closest integer
    let option = numOption > 0 ? 'scissors' :
                 numOption < 0 ? 'rock' :
                 'paper';
    return option;
}

function selectWinnerRound(computerChoice, humanChoice){
    firstTextUpdateForRound.classList.remove("resultNeutral", "resultWin", "resultLose", "resultTie");

    if(computerChoice == humanChoice){
        firstTextUpdateForRound.textContent = `You both played ${computerChoice}, No one score a point.`;
        firstTextUpdateForRound.classList.add('resultTie');
        return 'tie';
    } else if((computerChoice == 'rock') && (humanChoice == 'scissors')){
        firstTextUpdateForRound.textContent = 'You lost! Rock beats scissors.';
        firstTextUpdateForRound.classList.add('resultLose');
        return 'computer';
    } else if((computerChoice == 'paper') && (humanChoice == 'rock')){
        firstTextUpdateForRound.textContent = 'You lost! Paper beats rock.';
        firstTextUpdateForRound.classList.add('resultLose');
        return 'computer';
    } else if((computerChoice == 'scissors') && (humanChoice == 'paper')){
        firstTextUpdateForRound.textContent = 'You lost! Scissors beats paper.';
        firstTextUpdateForRound.classList.add('resultLose');
        return 'computer';
    } else if((humanChoice == 'rock') && (computerChoice == 'scissors')){
        firstTextUpdateForRound.textContent = 'You Won! Rock beats scissors.';
        return 'human';
    } else if((humanChoice == 'paper') && (computerChoice == 'rock')){
        firstTextUpdateForRound.textContent = 'You Won! Paper beats rock.';
        return 'human';
    } else if((humanChoice == 'scissors') && (computerChoice == 'paper')){
        firstTextUpdateForRound.textContent = 'You Won! Scissors beats paper.';
        return 'human';
    }
}

// Add eventListener to start the game once the user select their choice.
humanButtons.forEach(button => {
    button.addEventListener('click', (event) => {

        if (gameOver) return; //get out of the listener.

        let humanImg = event.target;
        let humanChoice = humanImg.classList[0];

        humanButtons.forEach(img => img.classList.remove('selectedHuman'));
        humanImg.classList.add('selectedHuman');

        let computerChoice = getComputerChoice();

        computerButtons.forEach(img => img.classList.remove("selectedComputer"));
        const visualComputerChoice = document.querySelector(`.buttonsComputer img.${computerChoice}`);
        visualComputerChoice.classList.add('selectedComputer');

        let winnerRound = selectWinnerRound(computerChoice, humanChoice);

        //tell the user the winner for each round
        if (winnerRound == 'computer') {
            computerScore += 1;
            computerTextScore.textContent = computerScore;
        }else if (winnerRound == 'human'){
            humanScore += 1;
            humanTextScore.textContent = humanScore;
        }

        secondTextUpdateForRound.textContent = '';

        //Keep playing until a player score 5 points
        if (humanScore === 5 || computerScore === 5){
            gameOver = true;

            firstTextUpdateForRound.textContent = '';
            statusText = document.createElement('h3');
            
            if(humanScore === 5){
                statusText.textContent = 'You Won!';
                statusText.classList.add('resultWin');
                resultSection.appendChild(statusText);
            }else{
                statusText.textContent = 'You Lost!';
                statusText.classList.add('resultLose');
                resultSection.appendChild(statusText);
            }

            //Show button "Play Again" to erase everything and start again
            if (!playAgainBtn){

                humanButtonsCOntainer.classList.add('disabled');
                computerButtonsCOntainer.classList.add('disabled');

                playAgainBtn = document.createElement('button');
                playAgainBtn.textContent = 'Play Again';
                playAgainBtn.classList.add('playAgainBtn');
                resultSection.appendChild(playAgainBtn);

                playAgainBtn.addEventListener( 'click', (event) => {

                    humanScore = 0;
                    computerScore = 0;
                    gameOver = false;

                    humanButtonsCOntainer.classList.remove('disabled');
                    computerButtonsCOntainer.classList.remove('disabled');

                    computerTextScore.textContent = 0;
                    humanTextScore.textContent = 0;
                    firstTextUpdateForRound.classList.add('resultNeutral')
                    firstTextUpdateForRound.textContent = 'The first to win five rounds wins!';
                    secondTextUpdateForRound.textContent = 'Click an option to start the game.';

                    computerButtons.forEach(img => img.classList.remove("selectedComputer"));
                    humanButtons.forEach(img => img.classList.remove('selectedHuman'));

                    playAgainBtn.remove();
                    playAgainBtn = null;

                    statusText.remove();
                    statusText = null;
                });
            }
        }
         
    });
});
