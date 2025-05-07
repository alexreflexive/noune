import { Controls } from "./controls.js";

export const Dialog = () => {
  /* ***** FENETRES DE DIALOGUE ***** */

  // Dialogue Nouvelle partie.
  const newGame = document.querySelector("#new_game");
  const btnCloseNewGame = document.querySelector("#new_game button");
  const selPlayerCount = document.querySelector("#player_count");
  const controls = Controls();
  let playerCount;

  function newGameOpen() {
    newGame.show();
    console.log("New Game");
  }
  function newGameClose() {
    newGame.close();
    controls.addMessage("Nouvelle partie");
    return Promise.resolve("1");
  }

  btnCloseNewGame.addEventListener("click", function () {
    playerCount = selPlayerCount.value;
    console.log(playerCount + " joueurs");
    console.log("fermeture de la fenêtre New Game");
    newGameClose().then((value) => {
      newHandOpen();
    });
  });
  newGame.addEventListener("close", function () {
    // console.log("fermeture de la fenêtre New Game");
  });

  // Dialogue Novelle main
  const newHand = document.querySelector("#new_hand");
  const btnCloseNewHand = document.querySelector("#new_hand button");

  function newHandOpen() {
    newHand.show();
    console.log("Nouvelle main");
  }
  function newHandClose() {
    controls.addMessage("Nouvelle main");
    newHand.close();
    return Promise.resolve(true);
  }

  btnCloseNewHand.addEventListener("click", function () {
    console.log("Fermeture de la fenêtre New Hand");
    newHandClose().then((value) => {
      preflopOpen();
    });
  });
  newHand.addEventListener("close", function () {
    // console.log("Fermeture de la fenêtre New Hand");
  });

  // Dialogue Pré-flop
  const preflop = document.querySelector("#preflop");
  const btnClosePreflop = document.querySelector("#preflop button");

  function preflopOpen() {
    preflop.show();
    console.log("Préflop");
  }
  function preflopClose() {
    preflop.close();
    controls.addMessage("Préflop");
    return Promise.resolve(true);
  }

  btnClosePreflop.addEventListener("click", function () {
    console.log("Fermeture de la fenêtre Préflop");
    preflopClose().then((value) => {
      flopOpen();
    });
  });
  preflop.addEventListener("close", function () {
    // console.log("Fermeture de la fenêtre Préflop");
  });

  // Dialogue Flop
  const flop = document.querySelector("#flop");
  const btnCloseFlop = document.querySelector("#flop button");

  function flopOpen() {
    flop.show();
    console.log("Le Flop");
  }
  function flopClose() {
    flop.close();
    controls.addMessage("Le Flop");
    return Promise.resolve(true);
  }

  btnCloseFlop.addEventListener("click", function () {
    console.log("Fermeture de la fenêtre Flop");
    flopClose().then((value) => {
      showdownOpen();
    });
  });
  preflop.addEventListener("close", function () {
    // console.log("Fermeture de la fenêtre Flop");
  });

  // Dialogue Abattage.
  const showdown = document.querySelector("#showdown");
  const btnCloseShowdown = document.querySelector("#showdown button");

  function showdownOpen() {
    showdown.show();
    console.log("L'Abattage");
  }
  function showdownClose() {
    showdown.close();
    controls.addMessage("Abattage");
    return Promise.resolve(true);
  }

  btnCloseShowdown.addEventListener("click", function () {
    console.log("Fermeture de la fenêtre d'abattage");
    showdownClose().then((value) => {
      endHandOpen();
    });
  });
  preflop.addEventListener("close", function () {
    // console.log("Fermeture de la fenêtre Flop");
  });

  // Dialogue Fin de main
  const endHand = document.querySelector("#end_hand");
  const btnCloseEndHandNew = document.querySelector("#end_hand #btn-hand");
  const btnCloseEndGameNew = document.querySelector("#end_hand #btn-game");

  function endHandOpen() {
    endHand.show();
    console.log("Fin de main");
  }

  function endHandClose() {
    endHand.close();
    return Promise.resolve(true);
  }

  btnCloseEndHandNew.addEventListener("click", function () {
    endHandClose().then((value) => {
      controls.addMessage("Fin de main");
      newHandOpen();
    });
  });

  btnCloseEndGameNew.addEventListener("click", function () {
    endHandClose().then((value) => {
      controls.addMessage("Fin de partie");
      endGameOpen();
      console.log("Fin de partie.");
    });
  });

  endHand.addEventListener("close", function () {
    // console.log("Fin de main");
  });

  // Dialogue Fin de partie
  const endGame = document.querySelector("#end_game");
  const btnCloseEndGame = document.querySelector("#end_game button");

  function endGameOpen() {
    endGame.show();
    // console.log("Fin de partie");
  }
  function endGameClose() {
    endGame.close();
    // controls.addMessage("Fin de partie.");
    return Promise.resolve(true);
  }

  btnCloseEndGame.addEventListener("click", function () {
    endGameClose().then((value) => {
      newGameOpen();
    });
  });
  endHand.addEventListener("close", function () {
    // console.log("Fin de main");
  });

  return {
    newGameOpen: function () {
      newGame.showModal();
      console.log("Nouvelle partie");
    },

    getPlayerCount: function () {
      return playerCount;
    },
  };
};
