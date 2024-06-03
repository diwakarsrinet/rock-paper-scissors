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

/* function getHumanChoice () {
    let humanChoice; 
    let counter = 0;
    do {
        humanChoice = prompt("Please enter your choice - Rock, Paper or Scissors");
        humanChoice = humanChoice.toLowerCase();
        if(!humanChoice) {
            alert("No input, please try again");
        }
        else if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            counter++;
        }
        else {
            alert("Wrong choice, please try again");
        }
    }
    while (counter<1);
    return humanChoice;
}
*/

//Step 4: Declaration of player score variables as global
let humanScore = 0, computerScore = 0, winningScore = 0;
//Call playRound() on click of any of the buttons

let humanChoiceButton = document.querySelector(".buttonContainer");
humanChoiceButton.addEventListener('click', (event) => {
    let clickedButton = event.target;
    if(winningScore===1) {
        event.preventDefault();
        return;
    }
    if(humanScore===5 || computerScore===5) {
        if(humanScore>computerScore) {
            let finalWinner=document.createElement("h");
            finalWinner.textContent= `You beat the Computer by ${humanScore}-${computerScore}`;
            document.body.appendChild(finalWinner);
            winningScore++;
            return;
        }
        else {
            let finalWinner=document.createElement("h");
            finalWinner.textContent= `You lost to the Computer by ${humanScore}-${computerScore}`;
            document.body.appendChild(finalWinner);
            winningScore++;
            return;
        }
    }
    playRound(clickedButton.id);
});
//Step 5: Function to control one round of play
function playRound (btnChoice) {
    let humanChoice = btnChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    //check winner
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        let winnerResult = document.createElement('div');
        winnerResult.textContent =`You win! ${humanChoice} beats ${computerChoice}`;
        document.body.appendChild(winnerResult);
    }
    else if (humanChoice === computerChoice){
        let winnerResult = document.createElement('div');
        winnerResult.textContent =`No one wins! You chose ${humanChoice} and computer chose ${computerChoice}`;
        document.body.appendChild(winnerResult);
    }
    else {
        computerScore++;
        let winnerResult = document.createElement('div');
        winnerResult.textContent =`You loose! ${computerChoice} beats ${humanChoice}`;
        document.body.appendChild(winnerResult);
    }
    let winnerScore = document.createElement('div');
    winnerScore.textContent =`Scores: You ${humanScore} and Computer ${computerScore}`;
    document.body.appendChild(winnerScore);
}
//console.log(humanScore,computerScore);

//Step 6: Function to run the game with 5 rounds and show final winner & scores

/*function playGame () {
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
*/
