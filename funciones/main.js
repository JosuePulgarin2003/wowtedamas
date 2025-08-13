document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  // Slider automático
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

  setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos

  showSlide(currentIndex);

  // Animación fade-in al hacer scroll y al cargar
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
  checkFade(); // Para que se active al cargar la página también
});
