# rock-paper-scissors
Rock Paper Scissors - TOP Project

# Pseudo-code
Step 1: Setting up the github repo and file structure
>>>  Create a new repo in github named rock-paper-scissors
>>> Clone the repo to local folder
>>> Setup index.html file with basic structure and link to external jsscript.js script file. Create the jsscript.js file and test the linkage with Console message.
>>> Commit and push to github the current progress

Step 2: Create a function to get computer choice out of rock, paper & scissors
>>> SET Function declaration named getComputerChoice with no arguments
>>> GET random number with Math.random() function, round it off using Math.floor() function after multiplying the random number with 100 to place it in 0-99 range. Save it in randomNumber variable
>>> ASSIGN computer choice based on randomNumber i.e. Rock for values from 0 to 33, paper for 34 to 66 and scissors for value >66
>>> RETURN computer choice as string
>>> TEST if expected returns are there via console.log and devtools debug option to learn both
>>> Commit to github

Step 3: Create a function to return player choice
>>> SET function declaration named getHumanChoice
>>> Ask player choice via Propmt by giving 3 options i.e. Rock, Paper or Scissors
>>> CHECK the human player choice by storing in variable humanChoice and tell them if it is incorrect and put alert message to ask them to try again and recall the function from inside. Repeat using do-while loop with a variable counter till correct input is provided.
>>> RETURN the player choice on function call
>>> TEST the output
>>> Commit to github

Step 4: Declare 2 variables to keep score count for the player and computer
>>> SET variable humanScore and computerScore with initial values 0
>>> Commit to github

Step 5: Set-up playRound function to control single round of the game
>>> SET function named playRound
>>> CALL getComputerChoice and getHumanChoice and store the returned choices in variables computerChoice and humanChoice respectively
>>> SHOW the winner after comparing the logic - Paper beats rock, scissor beats paper, rock beats scissor
>>> Increment the previously declared global variables humanScore or computerScore based on this round's winner
>>> Commit to github

Step 6: Create playGame function to run the game for 5 rounds and then show the final score and winner
>>> SET function named playGame
>>> SET a for loop to run the rounds for 5 times
>>> CALL the playRound function each time
>>> SHOW scores for each round
>>> SHOW final scores for the game
>>> Commit to github
