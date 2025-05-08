export const Controls = () => {
  const ctrlBtn1 = document.querySelector("#ctrl-btn-1");
  const ctrlBtn2 = document.querySelector("#ctrl-btn-2"); 
  const ctrlBtn3 = document.querySelector("#ctrl-btn-3");
  const betRange = document.querySelector("#bet-range");
  const btnMin = document.querySelector("#btn-min");
  const btnMax = document.querySelector("#btn-max");
  const betValue = document.querySelector("#bet-value");

  let status = 0;

  ctrlBtn1.addEventListener("click", function (event) {
      console.log("Button 1 clicked");
    });

  ctrlBtn2.addEventListener("click", function () {
    console.log("Button 2 clicked");
  });

  ctrlBtn3.addEventListener("click", function () {
    console.log("Button 3 clicked");
  });

  betRange.addEventListener("change", function () {
    betValue.innerHTML = betRange.value;
    console.log("Bet value changed to: " + betRange.value);
  });

  btnMin.addEventListener("click", function () {
    betRange.value--;
    betValue.innerHTML = betRange.value;
      console.log("Button Min clicked "+betRange.value);
    });

  btnMax.addEventListener("click", function () {
    betRange.value++;
    betValue.innerHTML = betRange.value;
      console.log("Button Min clicked "+betRange.value);
    });

function setControls() {
  console.log("setControls " + status);
  switch (status) {
  case 0:
    console.log("Switch case 0");
    ctrlBtn1.disabled = true;
    ctrlBtn2.disabled = true;
    ctrlBtn3.disabled = true;
    betRange.disabled = true;
    btnMin.disabled = true;
    btnMax.disabled = true;
    break;


  };
}

  return {
    addMessage: function (newMessage) {
      console.log("controls " + newMessage + "\n");
      const msgBox = document.querySelector("#messagebox");
      msgBox.innerHTML = newMessage + "<br/>" + msgBox.innerHTML;
    },

    setControls: function () {
      console.log("setControls " + status);
      setControls();
    },

    setStatus: function (newStatus) {
      status = newStatus;
      console.log("setStatus " + status);
      setControls(status);
    },
  };
};


