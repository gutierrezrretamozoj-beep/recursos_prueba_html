// Welcome message when the page loads
window.addEventListener("load", function () {
    alert("Welcome to my portfolio! 🩵");
});

// Change paragraph text when clicking button
const changeTextBtn = document.getElementById("changeTextBtn");
const aboutText = document.getElementById("aboutText");

changeTextBtn.addEventListener("click", function () {
    aboutText.textContent = "Now I am improving my portfolio using JavaScript, Flexbox, Grid and Media Queries!";
});

// Show/Hide projects section
const toggleProjectsBtn = document.getElementById("toggleProjectsBtn");
const projectsGrid = document.querySelector(".projects-grid");

toggleProjectsBtn.addEventListener("click", function () {
    if (projectsGrid.style.display === "none") {
        projectsGrid.style.display = "grid";
        toggleProjectsBtn.textContent = "Hide projects";
    } else {
        projectsGrid.style.display = "none";
        toggleProjectsBtn.textContent = "Show projects";
    }
});


// HAMBURGER MENU
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const header = document.querySelector("header");

hamburgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
});