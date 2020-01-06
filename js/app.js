const userScore = 0;
const compScore = 0;

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

document

const choices = ['r', 'p', 's'];

function randomChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        draw(userChoice);
    } else {
    switch(userChoice) {
        case 'r':
            if (computerChoice == 'p') {
                compWin();
            } else {
                userWin();
            }
            break;
        case 'p':
            if (computerChoice == 's') {
                compWin();
            } else {
                userWin();
            }
            break;
        case 's':
            if (computerChoice == 'r') {
                compWin();
            } else {
                userWin();
            }
            break;
    }
   }
}

function draw() {
    console.log("Draw");
}

function userWin() {
    console.log("User wins");
}

function compWin() {
    console.log("Computer wins")
}

function main() {
    rock_div.addEventListener("click", function() {
        playRound("r", randomChoice());
    })
    paper_div.addEventListener("click", function() {
        playRound("p", randomChoice());
    })
    scissors_div.addEventListener("click", function() {
        playRound("s", randomChoice());
    })
}

main();