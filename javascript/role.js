function login() {
  let role = document.getElementById("role").value;

  if (role === "admin") location.href = "admin.html";
  else if (role === "driver") location.href = "driver.html";
  else location.href = "passenger.html";
}
