
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel-images");
  const slides = carousel.querySelectorAll("img");
  let index = 0;

  function showSlide(i) {
    const offset = -i * 100; // Desplaza el contenedor
    carousel.style.transform = `translateX(${offset}%)`;
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 4000); // Cambia cada 4 segundos
});
