export const playerBoxes = (context, board, players) => {
    const playerCount = players.length;
    const radiusX = board.width / 2 + 350; // Distance horizontale de l'ellipse
    const radiusY = board.height / 2 + 150; // Distance verticale de l'ellipse
  
    // Détermine les angles pour chaque joueur
    const angles = [];
    if (playerCount === 2) {
      angles.push(0, Math.PI); // Hero en bas (0°), bot en haut (180°)
    } else if (playerCount === 3) {
      angles.push(0, (2 * Math.PI) / 3, (4 * Math.PI) / 3); // 0°, 120°, 240°
    } else if (playerCount === 4) {
      angles.push(0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2); // 0°, 90°, 180°, 270°
    } else if (playerCount === 6) {
      for (let i = 0; i < 6; i++) {
        angles.push((i * Math.PI) / 3); // 0°, 60°, 120°, 180°, 240°, 300°
      }
    }
  
    // Assigne les coordonnées et dessine chaque joueur
    players.forEach((player, index) => {
      const angle = angles[index];
      player.x = board.originX + radiusX * Math.cos(angle);
      player.y = board.originY + radiusY * Math.sin(angle);
  
      // Dessine un cercle pour l'emplacement
      context.fillStyle = player.isHero ? "lightblue" : "gray"; // Hero en bleu clair
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
export const playerBox = () => {};
