import "./css/style.css";
import "./js/app";
import goblin from "./img/goblin.png";

const cells = document.querySelectorAll(".cell");
const character = document.createElement("img");

character.src = goblin;

function spawnCharacter() {
   const randomCell = cells[Math.floor(Math.random() * cells.length)];
   randomCell.appendChild(character);
}

function moveCharacter() {
   const currentCell = character.parentElement;
   const possibleCells = [...cells].filter((cell) => cell !== currentCell);
   const randomCell =
      possibleCells[Math.floor(Math.random() * possibleCells.length)];
   randomCell.appendChild(character);
}

spawnCharacter();
setInterval(moveCharacter, 1000);
