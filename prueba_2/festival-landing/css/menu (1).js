/* ============================================================
   FESTIVAL GASTRONÓMICO NOCTURNO — menu.js
   Menú hamburguesa para móvil.
   Este script va justo antes del </body> en el HTML.
   ============================================================ */

/* Selección de elementos */
const header     = document.querySelector('header');
const hamburger  = document.querySelector('.hamburger');
const navLinks   = document.querySelectorAll('header nav a');

/* Si no existen los elementos, no hace nada */
if (header && hamburger) {

  /* ── Abrir / cerrar al hacer clic en el botón ── */
  hamburger.addEventListener('click', function () {
    header.classList.toggle('nav-open');

    const abierto = header.classList.contains('nav-open');
    hamburger.setAttribute('aria-expanded', abierto);
    document.body.style.overflow = abierto ? 'hidden' : '';
  });

  /* ── Cerrar al hacer clic en cualquier link del menú ── */
  navLinks.forEach(function (link) {
    link.addEventListener('click', cerrarMenu);
  });

  /* ── Cerrar al hacer clic fuera del panel (en el overlay) ── */
  document.addEventListener('click', function (e) {
    if (!header.classList.contains('nav-open')) return;
    if (!e.target.closest('nav') && !e.target.closest('.hamburger')) {
      cerrarMenu();
    }
  });

  /* ── Cerrar con la tecla Escape ── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      cerrarMenu();
      hamburger.focus();
    }
  });

  /* ── Cerrar si se redimensiona a desktop ── */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 767) cerrarMenu();
  });

  /* ── Función que cierra el menú ── */
  function cerrarMenu() {
    header.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

}
