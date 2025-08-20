// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const body = document.body;

  function toggleMenu(forceState) {
    const willOpen = typeof forceState === 'boolean' ? forceState : !hamburger.classList.contains('hamburger-active');
    hamburger.classList.toggle('hamburger-active', willOpen);
    navMenu.classList.toggle('navbar-menu-active', willOpen);
    body.classList.toggle('no-scroll', willOpen);
    hamburger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  }

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  navMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link') || e.target.classList.contains('btn')) {
      toggleMenu(false);
    }
  });

  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('navbar-menu-active')) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        toggleMenu(false);
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('navbar-menu-active')) {
      toggleMenu(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && navMenu.classList.contains('navbar-menu-active')) {
      toggleMenu(false);
    }
  });
});
