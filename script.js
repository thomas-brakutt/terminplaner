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
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Löschen";

  newElement.textContent = termin;
  terminList.append(newElement);
  terminInput.value = "";
  newElement.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    newElement.remove();
  });
});
