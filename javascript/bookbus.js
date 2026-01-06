function searchBus() {
  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value;

  const cards = document.getElementById("busCards");
  const table = document.getElementById("busTable");

  // Validation
  if (from === "" || to === "" || date === "") {
    alert("Please enter From, To and Date");
    cards.classList.add("hidden");
    table.classList.add("hidden");
    return;
  }

  // Show only after valid search
  cards.classList.remove("hidden");
  table.classList.remove("hidden");
}
