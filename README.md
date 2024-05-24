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
>>> Commit and push to github

Step 3: Create a function to return player choice
>>> SET function declaration named getHumanChoice
>>> Ask player choice via Propmt by giving 3 options i.e. Rock, Paper or Scissors
>>> CHECK the human player choice by storing in variable humanChoice and tell them if it is incorrect and put alert message to ask them to try again and recall the function from inside
>>> RETURN the player choice on function call
>>> TEST the output
>>> Commit and push to github
