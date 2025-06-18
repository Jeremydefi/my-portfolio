/* For animation */
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
const menuCross = document.getElementById("menuCross");
const menuX = document.getElementById("menuX");
const footerLogo = document.getElementById("footerLogo");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

/* window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLinks.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
  }
});
 */

/* light and dark mode */
/* document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

function toggleTheme() {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
} */

const myLogo = document.getElementById("myLogo");

// Function to toggle between light and dark mode
function toggleDarkMode() {
  // Check if dark mode is already enabled
  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    // Switch to light mode
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    document.getElementById("theme-icon").src = "images/moon_icon.png";
    myLogo.src = "mylogo/bolu.png";
    footerLogo.src = "mylogo/bolu.png";
    menuCross.src = "images/menu-black.png";
    menuX.src = "images/close-black.png";
  } else {
    // Switch to dark mode
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    document.getElementById("theme-icon").src = "images/sun_icon.png";
    myLogo.src = "mylogo/bolu2.png";
    footerLogo.src = "mylogo/bolu2.png";
    menuCross.src = "images/menu-white.png";
    menuX.src = "images/close-white.png";
  }
}

// Function to set the initial theme based on user preference
function setInitialTheme() {
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem("theme");

  // Check if user has system dark mode preference
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // If user has saved dark theme or prefers dark mode and has no saved preference
  if (savedTheme === "dark" || (!savedTheme && prefersDarkMode)) {
    document.body.classList.add("dark-mode");
    document.getElementById("theme-icon").src = "images/sun_icon.png";
    myLogo.src = "mylogo/bolu2.png";
    footerLogo.src = "mylogo/bolu2.png";
    menuCross.src = "images/menu-white.png";
    menuX.src = "images/close-white.png";
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("theme-icon").src = "images/moon_icon.png";
    myLogo.src = "mylogo/bolu.png";
    footerLogo.src = "mylogo/bolu.png";
    menuCross.src = "images/menu-black.png";
    menuX.src = "images/close-black.png";
  }
}

// Add event listener to theme toggle button
document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleDarkMode);
  }

  // Set initial theme
  setInitialTheme();
});

const form = document.getElementById("myForm");

/* form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual form submission (for demo)
  // Clear the form
  form.reset();
}); */
