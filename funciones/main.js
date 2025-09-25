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

  // --- SLIDER AUTOMÁTICO ---
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  if (slides.length > 0) {
    setInterval(nextSlide, 5000);
    showSlide(currentIndex);
  }

  // --- ANIMACIÓN FADE-IN ---
  const faders = document.querySelectorAll('.fade-in');

  function checkFade() {
    const triggerBottom = window.innerHeight * 0.85;
    faders.forEach(fader => {
      const top = fader.getBoundingClientRect().top;
      if (top < triggerBottom) fader.classList.add('visible');
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade();
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
      const region = card.dataset.region;
      mostrarMapa(region);
    });
  });
});
