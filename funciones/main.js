document.addEventListener('DOMContentLoaded', () => {
  // --- MENU RESPONSIVE ---
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle) {
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
    setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    showSlide(currentIndex);
  }

  // --- ANIMACIÓN FADE-IN AL HACER SCROLL ---
  const faders = document.querySelectorAll('.fade-in');

  function checkFade() {
    const triggerBottom = window.innerHeight * 0.85;

    faders.forEach(fader => {
      const top = fader.getBoundingClientRect().top;

      if (top < triggerBottom) {
        fader.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade(); // activa en carga inicial también
});

// --- REGIONES Y PROVINCIAS ---
function toggleProvincias(regionId) {
  const todasListas = document.querySelectorAll('.provincias-list');
  const listaSeleccionada = document.getElementById(regionId);

  // Cierra todas las demás
  todasListas.forEach(lista => {
    if (lista !== listaSeleccionada) {
      lista.classList.remove('visible');
    }
  });

  // Alterna la seleccionada (abre/cierra)
  listaSeleccionada.classList.toggle('visible');
}


// Funciones Google Maps

document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todas las tarjetas
  const regionCards = document.querySelectorAll(".region-card");
  const mapas = document.querySelectorAll(".mapa-container");

  // Función para mostrar un mapa y ocultar los demás
  function mostrarMapa(region) {
    mapas.forEach(mapa => {
      if (mapa.id === "map-" + region) {
        mapa.classList.add("activo");
      } else {
        mapa.classList.remove("activo");
      }
    });
  }

  // Evento click para cada tarjeta
  regionCards.forEach(card => {
    card.addEventListener("click", () => {
      const region = card.getAttribute("data-region");
      mostrarMapa(region);
    });
  });
});

//Google Maps
