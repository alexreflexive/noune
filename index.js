import { Players } from "./Logic/players.js";
import { Dialog } from "./GameEngine/dialog.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const board = {
  sidepots: [],
  flopCard: {},
  originX: 0,
  originY: 0,
};
const dialog = Dialog();
const FOOTER_HEIGHT = 150;
const BOARD_WIDTH = 400;
const BOARD_HEIGHT = 200;

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
  const origin = {
    x: Math.floor(canvas.width / 2),
    y: Math.floor(canvas.height / 2),
  };
  setOrigin(origin);
}

// Dessine le rectable central - le "board."
function setOrigin(origin) {
  context.font = "bold 24px serif";
  //context.fillText("*", origin.x, origin.y);
  const boardX = board.originX - 200;
  const boardY = board.originY - 100;
  context.strokeStyle = "darkgray";
  context.rect(boardX, boardY, BOARD_WIDTH, BOARD_HEIGHT);
  context.stroke();
}
