export const playerBoxes = (context, board, players, canvasWidth, canvasHeight) => {
  const playerCount = players.length;

  // Ajuste les rayons de l'ellipse en fonction de la taille du plateau
  const radiusX = canvasWidth * 0.40; // 45% de la largeur du plateau
  const radiusY = canvasHeight * 0.4; // 40% de la hauteur du plateau

  // Détermine les angles pour chaque joueur
  const angles = [];
  for (let i = 0; i < playerCount; i++) {
    angles.push((Math.PI / 2) + (i * (2 * Math.PI)) / playerCount); // Départ en bas (90°)
  }

  // Assigne les coordonnées et dessine chaque joueur
  players.forEach((player, index) => {
    const angle = angles[index];
    player.x = board.originX + radiusX * Math.cos(angle);
    player.y = board.originY + radiusY * Math.sin(angle);
    playerBox(context, player);


  });
};

// const playerBox = () => {};
function playerBox(context, player) {
  const rectWidth = 200; // Largeur du rectangle
  const rectHeight = 75; // Hauteur du rectangle

  context.fillStyle = "gray"; // Couleur de fond
  context.beginPath();
  context.rect(player.x - rectWidth / 2, player.y - rectHeight / 2, rectWidth, rectHeight);

  context.fill();
  context.strokeStyle = "black"; // Bordure
  context.stroke(); // Dessine la bordure

  // Charge l'image en fonction du genre
  const img = new Image();
  img.src = "/assets/female.png"; // Par défaut, utilise female.png
  if (player.gender === "male") {
    img.src = "/assets/male.png"; // Pas d'avatar mâle pour l'instant
  }

  // Dessine l'image alignée à gauche du rectangle
  img.onload = () => {
    const imgWidth = 50; // Largeur de l'image
    const imgHeight = 50; // Hauteur de l'image
    const imgX = player.x - rectWidth / 2 + 5; // Décalage de 5px depuis le bord gauche du rectangle
    const imgY = player.y - imgHeight / 2; // Centré verticalement dans le rectangle
    context.drawImage(img, imgX, imgY, imgWidth, imgHeight);
  };

  // Dessine le pseudo
  const textX = player.x - rectWidth / 2 + 60; // Position du texte à droite de l'image
  const textY = player.y - rectHeight / 2 + 7; // Décalage vertical pour aligner vers le haut
  context.fillStyle = "white";
  context.font = "14px Arial";
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillText(player.pseudo, textX, textY); // Pseudo
  context.fillText(player.stack, textX, textY + 20); // Jetons affichés en dessous du pseudo

  drawCard(context, player, player.x - rectWidth / 2, player.y - rectHeight / 2, rectWidth, rectHeight);
}

// Dessine une carte à l'intérieur du rectangle
function drawCard(context, player, rectX, rectY, rectWidth, rectHeight) {
  const cardWidth = 50; // Largeur de la carte
  const cardHeight = 60; // Hauteur de la carte
  const cardX = rectX + rectWidth - cardWidth - 10; // Position à droite du rectangle
  const cardY = rectY + (rectHeight - cardHeight) / 2; // Centré verticalement

  context.fillStyle = player.cardState === "open" ? "white" : "gray"; // Couleur selon l'état
  context.fillRect(cardX, cardY, cardWidth, cardHeight);

  context.strokeStyle = "black"; // Bordure
  context.strokeRect(cardX, cardY, cardWidth, cardHeight);

    // Affichage du contenu de la carte si elle est ouverte
    if (player.cardState === "open") {
      context.fillStyle = "red"; // Couleur rouge pour le cœur
      context.font = "bold 24px Arial";
      context.textAlign = "center";
      context.textBaseline = "top";
  
      // Affiche le "A" en haut
      context.fillText("A", cardX + cardWidth / 2, cardY + 8);
  
      // Affiche le symbole du cœur en dessous
      context.font = "28px Arial";
      context.fillText("♥", cardX + cardWidth / 2, cardY + cardHeight / 2-1);
    }
}