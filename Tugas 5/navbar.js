// Hamburger menu and responsive navbar for Tugas 5

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  const nav = document.querySelector("nav");

  if (hamburger && navList) {
    hamburger.addEventListener("click", function () {
      navList.classList.toggle("open");
      nav.classList.toggle("nav-open");
    });
  }

  // Optional: close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      navList &&
      hamburger &&
      !navList.contains(e.target) &&
      !hamburger.contains(e.target) &&
      navList.classList.contains("open")
    ) {
      navList.classList.remove("open");
      nav.classList.remove("nav-open");
    }
  });
});
