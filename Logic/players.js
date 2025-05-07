export const Players = (playerCount) => {
  const playerObjects = [
    { pseudo: "Joe", genre: "male" },
    { pseudo: "Marilyn", genre: "female" },
    { pseudo: "John", genre: "male" },
    { pseudo: "Clonie", genre: "female" },
    { pseudo: "Franck", genre: "male" },
    { pseudo: "Jennifer", genre: "female" },
    { pseudo: "Stu", genre: "male" },
    { pseudo: "Tatjana", genre: "female" },
    { pseudo: "Doyle", genre: "male" },
    { pseudo: "Vanessa", genre: "female" },
    { pseudo: "Phil", genre: "male" },
    { pseudo: "Samantha", genre: "female" },
    { pseudo: "Antonio", genre: "male" },
    { pseudo: "Aussie", genre: "female" },
    { pseudo: "Chip", genre: "male" },
    { pseudo: "Kara", genre: "female" },
    { pseudo: "Chris", genre: "male" },
    { pseudo: "Sandra", genre: "female" },
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
        genre: "male",
        x: 0,
        y: 0,
        stack: 100,
        bet: 10,
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
      }
      return playersReturn;
    },
  };
};
