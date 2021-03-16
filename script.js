// computer will choose something randomly out of rock-paper-scissors
function computerPlay() {
    let randomint = Math.floor(Math.random() * 3) + 1;    // returns random int between 1 and 3 (including)

    let option = '';
    if (randomint == 1) {
        option = 'rock';
    } else if (randomint == 2) {
        option = 'paper';
    } else {
        option = 'scissors';
    }

    return option;
}

// player will input their move out of rock-paper-scissors
function playerPlay(input) {
    return input;
}

// we will figure out the winner:
//     rock wins scissor
//     paper wins rock
//     scissor wins paper
//     same is tie
// then return the result as string
function playRound(playerSelection, computerSelection) {
    results = ''
    if (playerSelection == computerSelection) {
        results = 'D';
    } else if (playerSelection == 'rock') {
        results = (computerSelection == 'scissors') ? 'W' : 'L';
    } else if (playerSelection == 'paper') {
        results = (computerSelection == 'rock') ? 'W' : 'L';
    } else if (playerSelection == 'scissors') {
        results = (computerSelection == 'paper') ? 'W' : 'L';
    }

    return results;
}

function printResult(results, playerSelection, computerSelection) {
    switch (results) {
    case 'W':
        results = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        break;
    case 'L':
        results = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        break;
    case 'D':
        results = `Game Tied! ${playerSelection} ties ${computerSelection}`;
        break;
    }
    
    return results;
}

function scores(computerScore, playerScore) {
    if (playerScore > computerScore) {
        return 'Player Wins!';
    } else if (playerScore < computerScore) {
        return 'Computer Wins!';
    }
}


// runs the game
const buttons = document.querySelectorAll('button.options');

let results, playerScore = 0, computerScore = 0;

buttons.forEach((button) => {    
    button.addEventListener('click', function (e) {
        const userInput = playerPlay(button.getAttribute('id'));
        const compInput= computerPlay();

        results = playRound(userInput, compInput);  // takes result as W, L, D
        // convert result to more readable and updates score
        results = printResult(results, userInput,compInput);

        const resultDiv = document.querySelector('#result');        
        const scoreDiv = document.querySelector('#score');

        if (computerScore == 5 || playerScore == 5) {
            if ((computerScore !== playerScore) && (computerScore <= 5 && playerScore <= 5))
            {
                resultDiv.textContent = `RESULTS: ${results}`;
                scoreDiv.textContent = `YOU: ${playerScore}, COMP: ${computerScore}`;
            }
            document.querySelector('#gameover').textContent = `${scores(computerScore, playerScore)}`;
            return;
        } else if ((computerScore > 5) || (playerScore > 5)){
            return;
        } else {
            resultDiv.textContent = `RESULTS: ${results}`;
            scoreDiv.textContent = `YOU: ${playerScore}, COMP: ${computerScore}`;
        }
    });
});
    
    