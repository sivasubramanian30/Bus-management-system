// Highlight active navbar link
const links = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Simple alert for buttons (demo purpose)
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText.includes("Track")) {
      alert("Tracking bus... (Demo)");
    }
    if (btn.innerText.includes("Search")) {
      alert("Searching buses... (Demo)");
    }
  });
});
function trackBus() {
  const busInput = document.getElementById("busNumber").value;
  const resultCard = document.getElementById("traceResult");

  if (busInput.trim() === "") {
    alert("Please enter bus number");
    return;
  }

  // Show result after button click
  resultCard.classList.remove("hidden");
}

