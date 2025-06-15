"use strict";

const options = ["rock", "paper", "scissor"];

// generate random integer between 0 and 2
const randomInt = Math.floor(Math.random() * options.length);

// Computer: move generated using array indexing
const computerMove = options[randomInt];

// User: move passed via CommandLineArgument
const userMove = process.argv[2]?.toLowerCase().trim();

// thanks to Hoisting using Function Declaration
RockPaperScissor(userMove);

function RockPaperScissor(userMove) {
  if (!options.includes(userMove)) {
    console.log("Invalid move! Choose rock, paper, or scissor.");
  } else if (computerMove === userMove) {
    console.log(
      `Computer: ${computerMove}, User: ${userMove}:=> It's a DRAW!!`
    );
  } else if (
    (computerMove === "rock" && userMove === "scissor") ||
    (computerMove === "paper" && userMove === "rock") ||
    (computerMove === "scissor" && userMove === "paper")
  ) {
    console.log(
      `Computer: ${computerMove}, User: ${userMove}:=> Computer Wins!`
    );
  } else {
    console.log(`Computer: ${computerMove}, User: ${userMove}:=> User Wins!`);
  }
}
