/*Caching the dom*/

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".game-result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

/**
 * Generate random number to to give us a random element from the array
 */
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}



function game(userChoice){
    const computerChoice = getComputerChoice();
}


/**
 * Event listeners to determine the users choice ( rock, paper or scissors)
 */
function main(){
rock_div.addEventListener('click', function(){
    game("rock");
})
paper_div.addEventListener('click', function(){
    game("paper");
})
scissors_div.addEventListener('click', function(){
    game("scissors");
})
}
 main();
