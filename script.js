const addTerminButton = document.getElementById("addTerminButton");
const terminInput = document.getElementById("terminInput");
const terminList = document.getElementById("terminList");

addTerminButton.addEventListener("click", function () {
  const termin = terminInput.value.trim();
  if (termin === "") {
    alert("Bitte geben Sie einen Termin ein.");
    return;
  }

  const newElement = document.createElement("li");
  newElement.textContent = termin;
  terminList.append(newElement);
  terminInput.value = "";
});
