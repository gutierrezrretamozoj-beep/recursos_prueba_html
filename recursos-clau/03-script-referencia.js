// ================================================
//   ARCHIVO: script.js
//   RECURSO DE REFERENCIA — Junior Developer
//   Patrones usados en tu portfolio actual
// ================================================


// ─────────────────────────────────────────────
// 1. EJECUTAR CÓDIGO CUANDO LA PÁGINA CARGÓ
//    Equivalente a "esperar a que el HTML esté listo"
// ─────────────────────────────────────────────

// Opción A: evento "load" (espera TODO incluyendo imágenes)
window.addEventListener("load", function () {
    console.log("✅ Page fully loaded.");
    alert("Welcome! 🩵");  
});

// Opción B: "DOMContentLoaded" (más rápido, solo espera el HTML)
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM ready.");
});


// ─────────────────────────────────────────────
// 2. SELECCIONAR ELEMENTOS DEL DOM
// ─────────────────────────────────────────────

// Por ID (devuelve 1 elemento)
const btn         = document.getElementById("changeTextBtn");
const aboutText   = document.getElementById("aboutText");
const successMsg  = document.getElementById("successMsg");

// Por clase (devuelve HTMLCollection — el primero con [0])
const firstCard   = document.querySelector(".project-card");    // 1 elemento
const allCards    = document.querySelectorAll(".project-card"); // todos

// Por etiqueta
const header      = document.querySelector("header");


// ─────────────────────────────────────────────
// 3. CAMBIAR TEXTO DE UN ELEMENTO
// ─────────────────────────────────────────────
if (btn && aboutText) {
    btn.addEventListener("click", function () {
        aboutText.textContent = "Now I'm using JavaScript! 🚀";

        // Cambiar color con JS (menos recomendado que classList)
        aboutText.style.color = "#84b7f5";
    });
}


// ─────────────────────────────────────────────
// 4. MOSTRAR / OCULTAR ELEMENTO
// ─────────────────────────────────────────────

const toggleBtn    = document.getElementById("toggleProjectsBtn");
const projectsGrid = document.querySelector(".projects-grid");

if (toggleBtn && projectsGrid) {
    toggleBtn.addEventListener("click", function () {

        // Forma 1: toggle con class "hidden" (definida en CSS)
        projectsGrid.classList.toggle("hidden");

        // Actualizar texto del botón según estado
        const isHidden = projectsGrid.classList.contains("hidden");
        toggleBtn.textContent = isHidden ? "Show projects" : "Hide projects";
    });
}


// ─────────────────────────────────────────────
// 5. MENÚ HAMBURGUESA (mobile)
// ─────────────────────────────────────────────

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu      = document.getElementById("navMenu");

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");   // CSS: nav.active { display: block }
        header.classList.toggle("active");    // CSS: header.active { flex-direction: column }
    });
}


// ─────────────────────────────────────────────
// 6. VALIDAR Y MANEJAR FORMULARIO
// ─────────────────────────────────────────────

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();  // evita que recargue la página

        // Leer valores del formulario
        const name    = document.getElementById("name").value.trim();
        const email   = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validación simple
        if (name === "" || email === "" || message === "") {
            alert("⚠️ Please fill in all fields.");
            return; // detiene la ejecución
        }

        // Si todo está bien
        console.log("Form data:", { name, email, message });

        // Mostrar mensaje de éxito
        if (successMsg) {
            successMsg.classList.remove("hidden");
        }

        // Limpiar el formulario
        contactForm.reset();
    });
}


// ─────────────────────────────────────────────
// 7. CAMBIAR ESTILOS CON classList
// ─────────────────────────────────────────────

// Métodos de classList:
//   element.classList.add("nombre-clase")      → agrega
//   element.classList.remove("nombre-clase")   → elimina
//   element.classList.toggle("nombre-clase")   → alterna
//   element.classList.contains("nombre-clase") → true/false


// ─────────────────────────────────────────────
// 8. RECORRER MÚLTIPLES ELEMENTOS (forEach)
// ─────────────────────────────────────────────

// querySelectorAll devuelve NodeList → se puede iterar con forEach
const petCards = document.querySelectorAll(".pet-card");

petCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.borderColor = "#84b7f5";  // cambia borde al pasar el mouse
    });

    card.addEventListener("mouseleave", function () {
        card.style.borderColor = "whitesmoke";  // restaura al salir
    });
});


// ─────────────────────────────────────────────
// 9. NAVEGAR A OTRA PÁGINA
// ─────────────────────────────────────────────

// Desde un botón (tu estilo en pets.html):
//   <button onclick="window.location.href='index.html'">Back</button>

// Desde JS:
function goToPage(url) {
    window.location.href = url;
}


// ─────────────────────────────────────────────
// 10. CREAR ELEMENTOS DINÁMICAMENTE (bonus extra)
// ─────────────────────────────────────────────

function addProjectCard(title, url) {
    const grid = document.querySelector(".projects-grid");
    if (!grid) return;

    // Crear el elemento
    const card = document.createElement("a");
    card.className   = "project-card";
    card.href        = url || "#";
    card.target      = "_blank";
    card.textContent = title;

    // Insertarlo en el DOM
    grid.appendChild(card);
}

// Ejemplo de uso:
// addProjectCard("New project", "https://github.com/...");


// ═══════════════════════════════════════════════
//   REFERENCIA RÁPIDA — EVENTOS MÁS COMUNES
//   ═══════════════════════════════════════════
//   "click"         → clic en elemento
//   "submit"        → envío de formulario
//   "change"        → valor de input cambia
//   "input"         → mientras el usuario escribe
//   "mouseenter"    → mouse entra al elemento
//   "mouseleave"    → mouse sale del elemento
//   "keydown"       → tecla presionada
//   "load"          → página cargada
//   "DOMContentLoaded" → HTML cargado (sin imágenes)
// ═══════════════════════════════════════════════
