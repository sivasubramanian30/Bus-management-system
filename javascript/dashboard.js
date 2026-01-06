function showTable(tableId) {
  // Hide all tables
  const tables = document.querySelectorAll(".table-box");
  tables.forEach(table => table.classList.add("hidden"));

  // Show selected table
  document.getElementById(tableId).classList.remove("hidden");
}
