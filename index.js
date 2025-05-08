import { Players } from "./Logic/players.js";
import { Dialog } from "./GameEngine/dialog.js";
import {Controls} from "./GameEngine/controls.js";
import { playerBoxes } from "./GameEngine/player_boxes.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const controls = Controls();
controls.setStatus(0); // Initialisation de l'état des contrôles
//controls.setControls(); // Initialisation des contrôles

const board = {
  sidepots: [],
  flopCard: {},
  originX: 0,
  originY: 0,
  width: 400,
  height: 200,
};
const dialog = Dialog(controls);
const FOOTER_HEIGHT = 150;
// const BOARD_WIDTH = 400;
// const BOARD_HEIGHT = 200;

let game = null ;

// Chargement du jeu
window.onload = function () {
  redraw();
  dialog.newGameOpen();
  console.log("joueurs : " + dialog.getPlayerCount());
  // dialog.newHandOpen();
};

// Redessiner après un changement de taille de la fenêtre.
window.onresize = function () {
  redraw();
};

// Instruction de dessiner ou redessiner l'ensemble du tapis vert.
function redraw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - FOOTER_HEIGHT;
  board.originX = Math.floor(canvas.width / 2);
  board.originY = Math.floor(canvas.height / 2);
  context.fillStyle = "green"; // Assure un fond vert
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  setOrigin(origin);
  if (game && game.players) {
    // drawPlayerPositions(game.players); // Dessine les joueurs si la partie est initialisée
    playerBoxes(context, board, game.players, canvas.width, canvas.height);
  }

  // const origin = {
  //   x: Math.floor(canvas.width / 2),
  //   y: Math.floor(canvas.height / 2),
  // };
}

// Dessine le rectable central - le "board."
function setOrigin(origin) {
  context.font = "bold 24px serif";
  //context.fillText("*", origin.x, origin.y);
  const boardX = board.originX - 200;
  const boardY = board.originY - 100;
  context.strokeStyle = "darkgray";
  context.rect(boardX, boardY, board.width, board.height);
  context.stroke();
}


// Initialisation de la partie
function startGame(playerCount) {
  game = {
    players: Players(playerCount).getPlayers(),
  };
  controls.addMessage(`Partie avec ${playerCount} joueurs : ${game.players.map(p => p.pseudo).join(", ")}`);
  redraw();
}

// Intégration avec le dialogue
document.querySelector("#new_game button").addEventListener("click", () => {
  const playerCount = parseInt(document.querySelector("#player_count").value);
  startGame(playerCount);
});