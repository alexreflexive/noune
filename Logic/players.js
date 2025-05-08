export const Players = (playerCount) => {
  const playerObjects = [
    { pseudo: "Joe", gender: "male" },
    { pseudo: "Marilyn", gender: "female" },
    { pseudo: "John", gender: "male" },
    { pseudo: "Clonie", gender: "female" },
    { pseudo: "Franck", gender: "male" },
    { pseudo: "Jennifer", gender: "female" },
    { pseudo: "Stu", gender: "male" },
    { pseudo: "Tatjana", gender: "female" },
    { pseudo: "Doyle", gender: "male" },
    { pseudo: "Vanessa", gender: "female" },
    { pseudo: "Phil", gender: "male" },
    { pseudo: "Samantha", gender: "female" },
    { pseudo: "Antonio", gender: "male" },
    { pseudo: "Aussie", gender: "female" },
    { pseudo: "Chip", gender: "male" },
    { pseudo: "Kara", gender: "female" },
    { pseudo: "Chris", gender: "male" },
    { pseudo: "Sandra", gender: "female" },
  ];

  return {
    getPlayers: function () {
      const playerSource = playerObjects.slice();
      const playersReturn = [];
      playersReturn.push({
        isHero: true,
        isHuman: true,
        type: "human",
        pseudo: "Hero",
        gender: "male",
        x: 0,
        y: 0,
        stack: 100,
        bet: 10,
        cardState:"open", // Ouvert par défaut
        cardValue : "A♠", // Valeur de la carte (0 pour aucune carte)        
      });

      // playerCount--; // Parce que le héros est le premier de playerCount.

      for (let i = 1; i < playerCount; i++) {
        const index = Math.floor(Math.random() * (playerSource.length - 1));
        const player = playerSource.splice(index, 1)[0];
        player.isHero = false;
        player.isHuman = false;
        player.stack = 100;
        player.bet = 10;
        player.type = "CPU";
        playersReturn.push(player);
        player.cardState="closed-active"; // Ouvert par défaut
        player.cardValue = "A♠"; // Valeur de la carte (0 pour aucune carte)
      }
      return playersReturn;
    },
  };
};
