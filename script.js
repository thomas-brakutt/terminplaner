const appointmentForm = document.getElementById("appointmentForm");
const terminInput = document.getElementById("terminInput");
const terminList = document.getElementById("terminList");

const appointments = [];

appointmentForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Verhindert das erneute Laden der Seite
  const termin = terminInput.value.trim();
  if (termin === "") {
    alert("Bitte geben Sie einen Termin ein.");
    return;
  }

  appointments.push(termin);

  console.log(appointments);

  const newElement = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Löschen";

  newElement.textContent = termin;
  newElement.appendChild(deleteButton);
  terminList.append(newElement);
  terminInput.value = "";

  deleteButton.addEventListener("click", function () {
    const confirmDelete = confirm(
      "Möchten Sie diesen Termin wirklich löschen?",
    );
    if (confirmDelete) {
      newElement.remove();
      const index = appointments.indexOf(termin); // ermittelt Index von dem Termin und speichert ihn in der Variable index
      if (index > -1) {
        // prüft, ob der Termin in der Liste vorhanden ist
        appointments.splice(index, 1); // entfernt den Termin aus dem Array
        console.log(appointments);
      }
    }
  });
});
