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
const gameReset = document.getElementById("reset");
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
    if(userScore !== 5 && computerScore !==5){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log("win");
    computerScore_span.innerHTML = computerScore;
    result_text.innerHTML = userChoice + " beats " + computerChoice;
    } else if(userScore == 5 && computerScore !==5){
       console.log("user won the game")
       result_text.innerHTML = "Congratulations, You WIN!";
       restart();
    }
}
/**
 * This function executes when you lose. It adds 1 to the computer score. Displays +1 to the computer score on the 
 * scoreboard and logs it to the console.
 */
function lose(userChoice, computerChoice){
    if(computerScore !== 5 && userScore !== 5) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log("lose");
    computerScore_span.innerHTML = computerScore;
    result_text.innerHTML = userChoice + " loses to " + computerChoice;
    } else if (computerScore == 5 && userScore !== 5){
       console.log("Computer won the game")
       result_text.innerHTML = "Better Luck Next Time!";
       restart();
    }
}
/**
 * This function executes to tell the user that round was a draw
 */
function draw(userChoice, computerChoice){
    console.log("draw");
    computerScore_span.innerHTML = computerScore;
    result_text.innerHTML = userChoice + " was chosen by both, DRAW";
}


/**
 * Finishing the game when 5 is reached by the user or computer
 */

function gameWin(){
    result_text.innerHTML = "Congratulations, You have WON!";
    console.log("Game over, user won");
}

function restart(){
    rock_div.removeEventListener('click', function(){
        game("rock");
    })
    paper_div.removeEventListener('click', function(){
        game("paper");
    })
    scissors_div.removeEventListener('click', function(){
        game("scissors");
    })

    let aim = document.getElementById("aim");
    let reset = document.getElementById("reset");

    aim.style["display"] = "none";
    reset.style["display"] = "inline-block";  

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

 // Mouse animation https://codepen.io/morphed/pen/LZWppE

 document.onmousemove = animateCircles;

 var colors = ['#E73651', '#FEEA00', '#41EAD4']

 function animateCircles(event) {
     var circle = document.createElement("div");
     circle.setAttribute("class", "circle");
     document.body.appendChild(circle);
     
     circle.style.left = event.clientX + 'px';
     circle.style.top = event.clientY + 'px';

     var color = colors[Math.floor(Math.random() * colors.length)];
     circle.style.borderColor = color;

     circle.style.transition = "all 0.3s linear 0s";

     circle.style.left = circle.offsetLeft - 20 + 'px';
     circle.style.top = circle.offsetTop - 20 + 'px';

     circle.style.width = "50px";
     circle.style.height = "50px";
     circle.style.borderWidth = "5px";
     circle.style.opacity = 0;
 }


