// Your JavaScript goes here!
let computerScore = 0;
let playerScore = 0;
let rounds = 0;

const results = document.querySelector('#results');
const playerScoreElem = document.querySelector('#playerScore');
const computerScoreElem = document.querySelector('#computerScore');
const victory = document.querySelector('#victory');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    
    button.addEventListener('click', (e) => {
      updateScore(playRound(button.id, computerPlay()));
    });
  });

function playRound(playerSelection, computerSelection) {
    let r = 'rock'
    let p = 'paper'
    let s = 'scissors'
    let tieMessage = 'tie'
    let winMessage = 'win'
    let loseMessage = 'loss'
    switch (playerSelection) {
        case r:
            if (computerSelection == p) {
                return loseMessage
            } else if (computerSelection == s) {
                return winMessage
            } else {
                return tieMessage
            }
            break;

        case p:
            if (computerSelection == r) {
                return winMessage
            } else if (computerSelection == s) {
                return loseMessage
            } else {
                return tieMessage
            }

        case s:
            if (computerSelection == r) {
                return loseMessage
            } else if (computerSelection == p) {
                return winMessage
            } else {
                return tieMessage
            }
    
        default:
            return "bop"
            break;
    }
}
function computerPlay() {
    let determine =(Math.random() * 3)
    if (determine <= 1) {
        return "rock"
    } else if (determine <= 2) {
        return "scissors"
    } else if (determine <= 3) {
        return "paper"
    } else {
        return "error"
    }
}

function updateScore(result) {
    rounds += 1;
    switch (result) {
        case 'win':
            results.textContent = 'You won that round!'
            playerScore += 1;
            playerScoreElem.textContent = playerScore;
            break;

        case 'loss':
            results.textContent = 'You lost that round!'
            computerScore += 1;
            playerScoreElem.textContent = computerScore;
            break;

        case 'tie':
            results.textContent = 'You tied!'
            break;
    
        default:
            break;
    }
    if(rounds == 5) {
        if (playerScore > computerScore) {
            victory.textContent = 'You won!'
        } else {
            victory.textContent = 'You lost!'
        }
    }
}


