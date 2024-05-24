//This is the Javascript external file
console.log("Welcome to the Rock Paper Scissors game");

//Step 2: Computer choice generation
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber <+33) { 
        return "rock";
    }
    else if (randomNumber >=67) {
        return "scissors";
    }
    else {
        return "paper";
    }
}
//console debug
//console.log(getComputerChoice());

//Step 3: Get human player choice

function getHumanChoice () {
    let humanChoice; 
    let counter = 0;
    do {
        humanChoice = prompt("Please enter your choice - Rock, Paper or Scissors");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            counter++;
        }
        else {
            alert("Wrong choice, please try again");
        }
    }
    while (counter<1);
    return humanChoice;
}
//console debug
//console.log(getHumanChoice());

//Step 4: Declaration of player score variables as global
let humanScore = 0, computerScore = 0;

//Step 5: Function to control one round of play
function playRound () {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    //check winner
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === computerChoice){
        console.log(`No one wins! You chose ${humanChoice} and computer chose ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(`Scores: You ${humanScore} and Computer ${computerScore}`)
}
//console.log(humanScore,computerScore);

//Step 6: Function to run the game with 5 rounds and show final winner & scores

function playGame () {
    for(let i=0; i<5; i++) {
        console.log(`Round Number: ${i+1}`)
        playRound ();
    }
    if (humanScore>computerScore) {
        console.log(`Congrats! You won with a score of ${humanScore}-${computerScore}`);
    }
    else if (humanScore===computerScore) {
        console.log(`Tough game! Scores tied ${humanScore}-${computerScore}`);
    }

    else {
        console.log(`Hard luck! You lost with a score of ${humanScore}-${computerScore}`);
    }
}

//Start the game
playGame();
