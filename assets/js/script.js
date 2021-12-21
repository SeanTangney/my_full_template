/*jshint esversion: 6 */
/*Caching the dom*/

let userScore = 0;
let computerScore = 0;
let computerChoice = "";
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const result_text = document.querySelector(".result-text");
const gameReset = document.getElementById("reset");
const nameBadge = document.getElementById("user-label");
const play = document.getElementById("lets-play");
const comp_r = document.getElementById("comp-r");
const comp_p = document.getElementById("comp-p");
const comp_s = document.getElementById("comp-s");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

/**
 * Generate random number to to give us a random element from the array,
 * change color of computer wepons to show which one was chosen
 */
function getComputerChoice(userChoice, computerChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber == 0) {
            comp_r.style.color = "#E73651";
            rockBack();
        } else if (randomNumber == 1) {
            comp_p.style.color = "#FEEA00";
            rockBack();
        } else {
            comp_s.style.color = "#41EAD4";
            rockBack();
        }
        return choices[randomNumber];
}

/**
 * Change back colour of computer chosen weapon to default after 2 seconds
 */
function rockBack() {
    setTimeout(function () {
        comp_r.style.color = "slategray";
        comp_p.style.color = "slategray";
        comp_s.style.color = "slategray";
    }, 2000);
}


/**
 * This Function executes when you win. It adds 1 to the user score. Displays +1 to the user score on the 
 * scoreboard and logs it to the console.
 */
function win(userChoice, computerChoice) {
    if (userScore !== 5 && computerScore !== 5) {
        userScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_text.innerHTML = userChoice + " beats " + computerChoice;
    }
    if (userScore == 5 && computerScore !== 5) {
        result_text.innerHTML = "Congratulations, You WIN!";
        finish();
    }
}
/**
 * This function executes when you lose. It adds 1 to the computer score. Displays +1 to the computer score on the 
 * scoreboard and logs it to the console.
 */
function lose(userChoice, computerChoice) {
    if (computerScore !== 5 && userScore !== 5) {
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        result_text.innerHTML = userChoice + " loses to " + computerChoice;
    }
    if (computerScore == 5 && userScore !== 5) {
        result_text.innerHTML = "Better Luck Next Time!";
        finish();
    }
}
/**
 * This function executes to tell the user that round was a draw
 */
function draw(userChoice, computerChoice) {
    if (computerScore !== 5 && userScore !== 5) {
        result_text.innerHTML = userChoice + " was chosen by both, DRAW";
    }
}


/**
 * Function to display the reset button once the winner reaches 5.
 * Event listeners are removed from user weapons.
 */
function finish() {
    computerChoice = "";
    rock_div.removeEventListener('click', function () {
        game("rock");
    });
    paper_div.removeEventListener('click', function () {
        game("paper");
    });
    scissors_div.removeEventListener('click', function () {
        game("scissors");
    });

    let aim = document.getElementById("aim");
    if(aim){
        aim.style.display = "none";
    }
    
    let reset = document.getElementById("reset");
    if(reset){
        reset.style.display = "inline-block";
    }

}

/**
 * Reset everything to default before user starts again.
 */
if (gameReset){
gameReset.addEventListener("click", resetTheGame);
}

function resetTheGame() {
  computerChoice = "";
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_text.innerHTML = "Choose your weapon below to begin!";

  let aim = document.getElementById("aim");
    if(aim){
        aim.style.display = "inline-block";
    }
    
    let reset = document.getElementById("reset");
    if(reset){
        reset.style.display = "none";
    }
  
}




/**
 * 
 * define a switch case to determine the result of the game, and determine
 * which functiom should be called. 
 */
function game(userChoice) {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    switch (userChoice + computerChoice) {
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
function main() {
    rock_div.addEventListener('click', function () {
        game("rock");
    });
    paper_div.addEventListener('click', function () {
        game("paper");
    });
    scissors_div.addEventListener('click', function () {
        game("scissors");
    });
}

/**
 * Funtion to call the function to display name on the scoreboard and to start the game
 */
function start() {
    getName();
    main();
}

/**
 * Function directs you to game page when lets play is clicked on the index,
 * Inputted username is displayed on scoreboard
 */

function displayName() {
    if (document.getElementById("username-box").value == "") {
        let chosenName = document.getElementById("username-box");
        chosenName.style.border = "2px solid red";
    } else {
        let chosenName = document.getElementById("username-box").value;
        localStorage.setItem("username", chosenName);
        window.location = "game.html";
    }
}

/**
 * Add the username from storage into the userbadge
 */
function getName() {
    nameBadge.innerHTML = localStorage.getItem("username");
}

// Mouse animation https://codepen.io/morphed/pen/LZWppE

document.onmousemove = animateCircles;

var colors = ['#E73651', '#FEEA00', '#41EAD4'];

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