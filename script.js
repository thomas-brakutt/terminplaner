const appointmentForm = document.getElementById("appointmentForm");
const terminInput = document.getElementById("terminInput");
const terminList = document.getElementById("terminList");

// Gespeicherte Termine laden oder mit einem leeren Array starten
const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");

// Termine im Browser speichern
function saveAppointments() {
  localStorage.setItem("appointments", JSON.stringify(appointments));
}

// Terminliste auf der Webseite anzeigen
function renderAppointments() {
  terminList.textContent = "";

  appointments.forEach(function (termin, index) {
    const newElement = document.createElement("li");
    const deleteButton = document.createElement("button");

    newElement.textContent = termin;
    deleteButton.type = "button";
    deleteButton.textContent = "Löschen";

    newElement.appendChild(deleteButton);
    terminList.appendChild(newElement);

    deleteButton.addEventListener("click", function () {
      const confirmDelete = confirm(
        "Möchten Sie diesen Termin wirklich löschen?",
      );

      if (confirmDelete) {
        appointments.splice(index, 1);
        saveAppointments();
        renderAppointments();
      }
    });
  });
}

// Neuen Termin hinzufügen
appointmentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const termin = terminInput.value.trim();

  if (termin === "") {
    alert("Bitte geben Sie einen Termin ein.");
    return;
  }

  appointments.push(termin);
  saveAppointments();
  renderAppointments();

  terminInput.value = "";
});

// Beim Start die gespeicherten Termine anzeigen
renderAppointments();
