let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("input");

function computerPlay() {
    let numb = Math.floor(Math.random() * (3 + 1));
    let compPick;
    if (numb == 1){
        compPick = "rock";
      }
    else if (numb == 2){
        compPick = "paper";
      }
    else{
        compPick = "scissors";
      }
    return compPick;
}

function playRound(playerChoice) {
    computerChoice = computerPlay();
    let results = "";
    let player = playerChoice;
    if (player === computerChoice){
        document.getElementById("results").innerHTML = ("This round is a draw. You both chose " + player + ".");
      }
      else if (player === "rock" && computerChoice === "scissors"){
        document.getElementById("results").innerHTML = ("You win this round! You chose rock and the computer chose scissors.");
        playerScore++;
      }
      else if (player === "paper" && computerChoice === "rock"){
        document.getElementById("results").innerHTML = ("You win this round! You chose paper and the computer chose rock.");
        playerScore++;
      }
      else if (player === "scissors" && computerChoice === "paper"){
        document.getElementById("results").innerHTML = ("You win this round! You chose scissors and the computer chose paper.");
        playerScore++;
      }
      else {
        document.getElementById("results").innerHTML = ("I'm sorry, you lose this round. You chose " + player + " and the computer chose " + computerChoice + ".");
        computerScore++;
      }
    if (playerScore === 5){
        document.getElementById("results").innerHTML = ("You win this round! You chose " + 
            player + " and the computer chose " + computerChoice + ".<br><br>You win the game! You won " +
            playerScore + " rounds, while the computer won " + computerScore + " round(s)");
        playerScore = 0;
        computerScore = 0;
    }      
    if (computerScore === 5) {
        document.getElementById("results").innerHTML = ("I'm sorry, you lose this round. You chose " + 
        player + " and the computer chose " + computerChoice + "<br><br>You lost the " + 
        "game... You won " + playerScore + " round(s), while the computer won " + computerScore + " rounds.");
        playerScore = 0;
        computerScore = 0;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value);
    });
});