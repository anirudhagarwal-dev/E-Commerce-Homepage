const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const hearts = document.querySelectorAll(".heart");
const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");
const signupStatus = document.getElementById("signup-status");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function initWishlist() {
  hearts.forEach((h) => {
    h.addEventListener("click", () => {
      const active = h.dataset.active === "true";
      h.dataset.active = active ? "false" : "true";
    });
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function initNewsletter() {
  if (!newsletterForm) return;
  const stored = localStorage.getItem("newsletterEmails");
  const emails = stored ? JSON.parse(stored) : [];
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterEmail.value.trim();
    if (!validateEmail(email)) {
      signupStatus.textContent = "Enter a valid email address.";
      signupStatus.style.color = "red";
      return;
    }
    if (!emails.includes(email)) {
      emails.push(email);
      localStorage.setItem("newsletterEmails", JSON.stringify(emails));
    }
    signupStatus.textContent = "Signed up successfully!";
    signupStatus.style.color = "green";
    newsletterEmail.value = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initWishlist();
  initNewsletter();
});
