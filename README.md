# 🪨 Rock Paper Scissors Game 🎮

A retro implementation of the classic **Rock Paper Scissors** game, built with **HTML**, **Tailwind CSS**, and **JavaScript**.
This project showcases both command-line and UI-based gameplay modes.

---

## 📌 Game Modes

### 1. 🖥️ UI Version (Browser-based)

- Built with HTML, TailwindCSS, and JavaScript.
- User can play by clicking **Rock**, **Paper**, or **Scissor** buttons.
- Scores are updated after each round.
- Game is played as a **Best of 3 (League Mode)**.
- After 3 rounds, the winner of the league is displayed.
- Includes a **Reset Game** button to start a new match.

### 2. 🧑‍💻 CLI Version (Command Line Interface)

- Implemented using **Node.js**.
- User passes their move via command line argument:
  ```bash
  node rockPaperScissorCLI.js rock
  ```
  Computer randomly chooses a move.
  The result (win/lose/draw) is printed to the console.
