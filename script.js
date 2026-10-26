const addTerminButton = document.getElementById("addTerminButton");
const terminInput = document.getElementById("terminInput");
const terminList = document.getElementById("terminListe");

addTerminButton.addEventListener("click", function () {
  const newElement = document.createElement("li");
  newElement.textContent = terminInput.value;
  terminList.append(newElement);
  terminInput.value = "";
});
