import { createHeader } from "./components/createHeader.js";
import { createGrid } from "./components/createGrid.js";
import { createButtonBar } from "./components/createButtonBar.js";
import { generateSecretNumbers } from "./functions/generateSecretNumbers.js";
import { checkGuess } from "./functions/checkGuess.js";

const root = document.querySelector("#root");

// Page structure
/**
 * <div#root>
 *    <div.super-container>
 *      <div.game-container>
 *        <header>
 *          <h1>
 *          <hr>
 *        <div.grid-container>
 *          <div.row> x 6
 *            <div.cell> x 5
 *        <div.button-bar>
 *          <button divs> - enter, numbers, delete
 */

const { secretNumbers, secretMap } = generateSecretNumbers(true);

const game = {
  active: true,
  attempts: 0,      // serves to index a grid row
  rows: 6,          // attempts allowed
  columns: 5,       // secret number length
  guess: [],
  secretNumbers,
  secretMap,
  testedNumbers: Array(10).fill(false),
}

// Building the page structure
const superContainer = document.createElement('div');
superContainer.classList.add('super-container');
const gameContainer = document.createElement('div');
gameContainer.classList.add('game-container');
gameContainer.appendChild(createHeader("NUMBERLE"));
gameContainer.appendChild(createGrid(game.rows, game.columns));
gameContainer.appendChild(
  createButtonBar(["Enter", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Delete"])
);
superContainer.appendChild(gameContainer);
root.appendChild(superContainer);

const enterButton = document.querySelector(".enter-button");
const numberButtons = document.querySelectorAll(".number-button");
const deleteButton = document.querySelector(".delete-button")

numberButtons.forEach((b) =>
  b.addEventListener("click", (e) => {
    if (game.guess.length < game.columns && game.active) {
      document.querySelector(`.row-${game.attempts}`).childNodes[
        game.guess.length
      ].innerText = e.target.value;
      game.guess.push(e.target.value);
    }
  })
);

deleteButton.addEventListener("click", (e) => {
  if (game.guess.length > 0 && game.active) {
    document.querySelector(`.row-${game.attempts}`).childNodes[
      game.guess.length - 1
    ].innerText = "";
    game.guess.pop();
  }
});

enterButton.addEventListener("click", (e) => {
  if (game.guess.length === game.columns && game.active) {
    const rowColors = checkGuess(game.guess, game.secretNumbers, game.secretMap);
    rowColors.forEach((color, index) => {
      // change cell color
      const cell = document.querySelector(`.row-${game.attempts}`).childNodes[index];
      cell.style.backgroundColor = color;
      cell.style.color = 'white';
      
      // change button color
      // TODO: Refactor! Make better use of classes
      const colorStep = {
        false: 0,
        "#797C7E": 1, // gray, absent
        "#C5B565": 2, // yellow, present
        "#79A86B": 3, // green, correct

      }
      const button = document.querySelector(`.number-button-${game.guess[index]}`);
      if (colorStep[color] > colorStep[game.testedNumbers[game.guess[index]]]) {
        game.testedNumbers[game.guess[index]] = color;
        button.style.backgroundColor = color;
        button.style.color = 'white';
      }
    })
    
    game.attempts++;
    game.guess.splice(0, game.guess.length);

    if (game.attempts === game.rows || rowColors.every(color => color === '#79A86B')) game.active = false;
  }
});
