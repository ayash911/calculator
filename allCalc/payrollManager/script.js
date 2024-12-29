const billInput = document.getElementById("bill");
const cashInput = document.getElementById("cash");
const calculateButton = document.getElementById("btn");
const errorMessage = document.getElementById("error");
const notesTableBody = document.getElementById("notes-table-body");

const notes = [2000, 500, 100, 50, 20, 10, 5, 1];

function displayError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function clearError() {
  errorMessage.style.display = "none";
}

function updateTable(change) {
  notesTableBody.innerHTML = "";
  notes.forEach((note) => {
    const count = Math.floor(change / note);
    if (count > 0) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${note}</td><td>${count}</td>`;
      notesTableBody.appendChild(row);
    }
    change %= note;
  });
}

function calculateChange() {
  clearError();
  const billAmount = parseFloat(billInput.value);
  const cashAmount = parseFloat(cashInput.value);

  if (
    isNaN(billAmount) ||
    isNaN(cashAmount) ||
    billAmount <= 0 ||
    cashAmount <= 0
  ) {
    displayError("Please enter valid positive non zero numbers.");
    return;
  }

  if (cashAmount < billAmount) {
    displayError("Cash given is less than the bill amount.");
    return;
  }

  const change = cashAmount - billAmount;
  updateTable(change);
}

calculateButton.addEventListener("click", calculateChange);

[billInput, cashInput].forEach((input) => {
  input.addEventListener("input", () => {
    clearError();
    notesTableBody.innerHTML = "";
  });
});
