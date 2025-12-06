// main.js
document.addEventListener('DOMContentLoaded', () => {

  // --- MENU RESPONSIVE ---
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
  }

  // --- ANIMACIÓN FADE-IN ---
  const faders = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  faders.forEach(f => fadeObserver.observe(f));
});

// --- REGIONES Y PROVINCIAS ---
function toggleProvincias(regionId) {
  const todasListas = document.querySelectorAll('.provincias-list');
  const listaSeleccionada = document.getElementById(regionId);

  todasListas.forEach(lista => {
    if (lista !== listaSeleccionada) lista.classList.remove('visible');
  });

  if (listaSeleccionada) listaSeleccionada.classList.toggle('visible');
}

// --- GOOGLE MAPS Y TARJETAS ---
document.addEventListener("DOMContentLoaded", () => {
  const regionCards = document.querySelectorAll(".region-card");
  const mapas = document.querySelectorAll(".mapa-container");

  function mostrarMapa(region) {
    mapas.forEach(mapa => {
      mapa.classList.toggle("activo", mapa.id === "map-" + region);
    });
  }

  regionCards.forEach(card => {
    card.addEventListener("click", () => {
      mostrarMapa(card.dataset.region);
    });
  });
});
