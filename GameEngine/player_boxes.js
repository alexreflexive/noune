export const playerBoxes = (context, board, players, canvasWidth, canvasHeight) => {
  const playerCount = players.length;

  // Ajuste les rayons de l'ellipse en fonction de la taille du plateau
  const radiusX = canvasWidth * 0.45; // 45% de la largeur du plateau
  const radiusY = canvasHeight * 0.4; // 40% de la hauteur du plateau

  // Détermine les angles pour chaque joueur
  const angles = [];
  for (let i = 0; i < playerCount; i++) {
    angles.push((Math.PI / 2) + (i * (2 * Math.PI)) / playerCount); // Départ en bas (90°)
  }

  /*
  if (playerCount === 2) {
    angles.push(Math.PI / 2, (3 * Math.PI) / 2); // Hero en bas (90°), bot en haut (270°)
  } else if (playerCount === 3) {
    angles.push(Math.PI / 2, (5 * Math.PI) / 6, (11 * Math.PI) / 6); // 90°, 150°, 330°
  } else if (playerCount === 4) {
    angles.push(Math.PI / 2, 0, (3 * Math.PI) / 2, Math.PI); // 90°, 0°, 270°, 180°
  } else if (playerCount === 6) {
    for (let i = 0; i < 6; i++) {
      angles.push((Math.PI / 2) + (i * Math.PI) / 3); // Décalage pour commencer en bas
    }
  }
*/


  // Assigne les coordonnées et dessine chaque joueur
  players.forEach((player, index) => {
    const angle = angles[index];
    player.x = board.originX + radiusX * Math.cos(angle);
    player.y = board.originY + radiusY * Math.sin(angle);

    // Dessine un cercle pour l'emplacement
    // context.fillStyle = player.isHero ? "lightblue" : "gray"; // Hero en bleu clair
    context.fillStyle =  "gray"; 
    context.beginPath();
    context.arc(player.x, player.y, 60, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = "black";
    context.stroke(); // Bordure pour plus de lisibilité

    // Dessine le pseudo
    context.fillStyle = "white";
    context.font = "14px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(player.pseudo, player.x, player.y);
  });
};

const playerBox = () => {};
