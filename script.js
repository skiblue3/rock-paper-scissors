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
function playerPlay() {
    option = '';
    while(true) {
        option = prompt("enter rock/paper/scissors: ");
        option = option.toLowerCase();
        if (option != 'rock' && option != 'paper' && option != 'scissors') {
            alert("invalid option");
        } else {
            break;
        }
    } 
    return option;
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

function scores(playerScore, computerScore) {
    console.log(`Scores: Player->${playerScore}  Computer->${computerScore}`);
    if (playerScore > computerScore) {
        console.log('Player Wins!');
    } else if (playerScore < computerScore) {
        console.log('Computer Wins!');
    } else {
        console.log('Draw.');
    }
}

// loop it 5 times for 5 rounds and print answer each time
function game() {
    let playerSelection, computerSelection;
    let playerScore = computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        results = playRound(playerSelection, computerSelection);

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
        console.log(results);
    }
    
    scores(playerScore, computerScore);
}

game();
    