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
