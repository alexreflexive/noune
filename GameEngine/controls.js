export const Controls = () => {
  const ctrlBtn1 = document.querySelector("#ctrl-btn-1");
  const ctrlBtn2 = document.querySelector("#ctrl-btn-2"); 
  const ctrlBtn3 = document.querySelector("#ctrl-btn-3");
  const btnMin = document.querySelector("#btn-min");
  const btnMax = document.querySelector("#btn-max");

  ctrlBtn1.addEventListener("click", function () {
      console.log("Button 1 clicked");
    });

  ctrlBtn2.addEventListener("click", function () {
    console.log("Button 2 clicked");
  });

  ctrlBtn3.addEventListener("click", function () {
    console.log("Button 3 clicked");
  });

  btnMin.addEventListener("click", function () {
      console.log("Button Min clicked");
    });

  btnMax.addEventListener("click", function () {
      console.log("Button Max clicked");
    });


  return {
    addMessage: function (newMessage) {
      console.log("controls " + newMessage + "\n");
      const msgBox = document.querySelector("#messagebox");
      msgBox.innerHTML = newMessage + "<br/>" + msgBox.innerHTML;
    },


  };
};
