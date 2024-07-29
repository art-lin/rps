let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice(randomNum) {
    let computer;
    // assign values to rock, paper, scissors
    if (randomNum == 0) {
        computer = 'rock';
    } else if (randomNum == 1) {
        computer = 'paper';
    } else {
        computer = 'scissors';
    }

    // log computer choice to the console
    console.log(`Computer chose ${computer}`)

    return computer;
}

function getHumanChoice() {
    let human;
    while (true) {
        human = prompt('rock, paper, or scissors?').toLowerCase();
        if ((human == 'rock') || (human == 'paper') || (human == 'scissors')) {
            break;
    } else {
        console.log("Invalid choice. Please type 'rock', 'paper', or 'scissors'.")
    }
}
    // log player's choice to the console
    console.log(`You chose ${human}`)

    return human;
}

function playRound(human, computer) {
    if (human == computer) {
        console.log("It's a tie!")
    } else if ((human == 'rock' && computer == 'scissors') 
    || (human == 'paper' && computer == 'rock') 
    || (human == 'scissors' && computer == 'paper') ) {
        console.log("You win!");
        humanScore++
    } else {
        console.log("You lose!")
        computerScore++
    }
    roundsPlayed++
    console.log(`SCORE: You - ${humanScore} | Computer - ${computerScore}`)
}

while (roundsPlayed < 5) {
    // get player's choice
    let humanSelection = getHumanChoice();
    // pick a random number 0-2 and call getComputerChoice with it
    let computerSelection = (getComputerChoice(Math.floor(Math.random() * 3)));
    playRound(humanSelection, computerSelection)
}