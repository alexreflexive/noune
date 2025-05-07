import { Players } from "./Logic/players.js";
import { Dialog } from "./GameEngine/dialog.js";
import {Controls} from "./GameEngine/controls.js";
import { playerBoxes } from "./GameEngine/player_boxes.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const controls = Controls();
const board = {
  sidepots: [],
  flopCard: {},
  originX: 0,
  originY: 0,
  width: 400,
  height: 200,
};
const dialog = Dialog();
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
    playerBoxes(context, board, game.players);
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

// // Dessine les emplacements des joueurs autour du board
// function drawPlayerPositions(players) {
//   const playerCount = players.length;
//   const radiusX = board.width / 2 + 350; // Distance horizontale de l'ellipse
//   const radiusY = board.height / 2 + 150; // Distance verticale de l'ellipse

//   // Détermine les angles pour chaque joueur
//   const angles = [];
//   if (playerCount === 2) {
//     angles.push(0, Math.PI); // Hero en bas (0°), bot en haut (180°)
//   } else if (playerCount === 3) {
//     angles.push(0, (2 * Math.PI) / 3, (4 * Math.PI) / 3); // 0°, 120°, 240°
//   } else if (playerCount === 4) {
//     angles.push(0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2); // 0°, 90°, 180°, 270°
//   } else if (playerCount === 6) {
//     for (let i = 0; i < 6; i++) {
//       angles.push((i * Math.PI) / 3); // 0°, 60°, 120°, 180°, 240°, 300°
//     }
//   }

//   // Assigne les coordonnées et dessine chaque joueur
//   players.forEach((player, index) => {
//     const angle = angles[index];
//     player.x = board.originX + radiusX * Math.cos(angle);
//     player.y = board.originY + radiusY * Math.sin(angle);

//     // Dessine un cercle pour l'emplacement
//     context.fillStyle = player.isHero ? "lightblue" : "gray"; // Hero en bleu clair
//     context.beginPath();
//     context.arc(player.x, player.y, 60, 0, 2 * Math.PI);
//     context.fill();
//     context.strokeStyle = "black";
//     context.stroke(); // Bordure pour plus de lisibilité

//     // Dessine le pseudo
//     context.fillStyle = "white";
//     context.font = "14px Arial";
//     context.textAlign = "center";
//     context.textBaseline = "middle";
//     context.fillText(player.pseudo, player.x, player.y);
//   });
// }

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