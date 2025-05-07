export const Controls = () => {
  return {
    addMessage: function (newMessage) {
      console.log("controls " + newMessage + "\n");
      const msgBox = document.querySelector("#messagebox");
      msgBox.innerHTML = newMessage + "<br/>" + msgBox.innerHTML;
    },
  };
};
