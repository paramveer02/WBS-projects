"use strict";

const buttons = document.querySelectorAll(".move-btn ");
const resetButton = document.getElementById("reset-btn");
const scoreEl = document.querySelector(".score");
const leagueEl = document.querySelector(".league");
const roundResultEl = document.getElementById("round-result");

const options = ["rock", "paper", "scissor"];

let userWins = 0;
let computerWins = 0;
let roundCount = 1;

scoreEl.textContent = `Round: ${roundCount} | You: ${userWins} - Computer: ${computerWins}`;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Stop if game over
    if (roundCount > 3) return;

    // generate random integer between 0 and 2
    const randomInt = Math.floor(Math.random() * options.length);

    const userMove = button.dataset.move;
    const computerMove = options[randomInt];

    if (computerMove === userMove) {
      roundResultEl.textContent = "It's a DRAW!! 🤝";
    } else if (
      (computerMove === "rock" && userMove === "scissor") ||
      (computerMove === "paper" && userMove === "rock") ||
      (computerMove === "scissor" && userMove === "paper")
    ) {
      roundResultEl.textContent = "💻 Computer wins this round!";
      computerWins++;
    } else {
      roundResultEl.textContent = "🎉 You win this round!";
      userWins++;
    }

    // Update the scores and round:
    scoreEl.textContent = `Round: ${roundCount} | You: ${userWins} - Computer: ${computerWins}`;

    // League result
    if (roundCount === 3) {
      if (userWins > computerWins) {
        leagueEl.textContent = "You 👨🏻‍🦱 win the League! 🏆";
      } else if (computerWins > userWins) {
        leagueEl.textContent = "Computer 💻 wins the League! 🏆";
      } else {
        leagueEl.textContent = "⚖️ The League is a Draw!";
      }
    }
    roundCount++;
  });
});

resetButton.addEventListener("click", () => {
  userWins = 0;
  computerWins = 0;
  roundCount = 1;
  roundResultEl.textContent = "";
  scoreEl.textContent = `Round: ${roundCount} | You: 0 - Computer: 0`;
  leagueEl.textContent = "";
});
