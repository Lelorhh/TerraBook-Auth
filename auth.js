document.getElementById("registerForm)?.addEventListener("submit", function (e)
  e.preventDefault();
const username= document.getElementById("regUsername").value;
const password= document.getElementById("regPassword).value;


 localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Registered successfully! Please log in.");
  window.location.href = "index.html";
});


document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser && username === storedUser.username && password === storedUser.password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html"; // this page will be built later
  } else {
    alert("Incorrect username or password.");
  }
});
