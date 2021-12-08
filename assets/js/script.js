/*Caching the dom*/

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".game-result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const result_text = document.querySelector(".result-text");

/**
 * Generate random number to to give us a random element from the array
 */
function getComputerChoice(userChoice, computerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
/**
 * This Function executes when you win. It adds 1 to the user score. Displays +1 to the user score on the 
 * scoreboard and logs it to the console.
 */
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log("win");
    computerScore_span.innerHTML = computerScore;
    result_text.innerHTML = userChoice + " beats " + computerChoice;
}
/**
 * This function executes when you lose. It adds 1 to the computer score. Displays +1 to the computer score on the 
 * scoreboard and logs it to the console.
 */
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log("lose");
    computerScore_span.innerHTML = computerScore;
    result_text.innerHTML = userChoice + " loses to " + computerChoice;
}
/**
 * This function executes 
 */
function draw(userChoice, computerChoice){
    console.log("draw");
    computerScore_span.innerHTML = computerScore;
    result_text.innerHTML = userChoice + " was chosen by both, DRAW";
}
        



/**
 * 
 * define a switch case to determine the result of the game, and determine
 * which functiom should be called. 
 */
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;            
    }
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


