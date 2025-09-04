// Load user info
const user = JSON.parse(localStorage.getItem("studentUser"));
const loggedIn = localStorage.getItem("loggedIn");
if (!loggedIn || !user) {
  window.location.href = "login.html"; // redirect if not logged in
} else {
  document.getElementById("profile-name").innerText = user.name;
  document.getElementById("profile-email").innerText = user.email;
}

// Logout
document.querySelector(".logout-btn").addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
});

// Dropdown toggle
document.querySelectorAll(".dropdown-toggle").forEach((card) => {
  card.addEventListener("click", () => {
    const targetId = card.getAttribute("data-target");
    const dropdown = document.getElementById(targetId);
    dropdown.classList.toggle("active");
  });
});

// Quiz check
function checkQuiz(btn, result) {
  const resEl = document.getElementById("quiz-result");
  if (result === "correct") {
    resEl.innerText = "✅ Correct! Well done.";
    resEl.style.color = "#10b981";
  } else {
    resEl.innerText = "❌ Oops! Try again.";
    resEl.style.color = "#ef4444";
  }
}

// FAQ toggle
// FAQ toggle accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
