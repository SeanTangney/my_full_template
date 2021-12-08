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

rock_div.addEventListener('click', function(){
    console.log("You chose rock");
})
paper_div.addEventListener('click', function(){
    console.log("You chose paper");
})
scissors_div.addEventListener('click', function(){
    console.log("You chose scissors");
})

