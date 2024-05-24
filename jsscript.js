//This is the Javascript external file
console.log("Welcome to the Rock Paper Scissors game");

//Step 1: Computer choice generation
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber <+33) { 
        return "Rock";
    }
    else if (randomNumber >=67) {
        return "Scissors";
    }
    else {
        return "Paper";
    }
}
//console debug
//console.log(getComputerChoice());

//Step 2: Get human player choice

function getHumanChoice () {
    let humanChoice = prompt("Please enter your choice - Rock, Paper or Scissors");
    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
        return humanChoice;
    }
    alert("Wrong choice, please try again");
    getHumanChoice();
}
//console debug
console.log(getHumanChoice());
