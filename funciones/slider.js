// slider.js
document.addEventListener('DOMContentLoaded', () => {

  function createSlider(container, options = {}) {
    const slides = Array.from(container.querySelectorAll(options.slideSelector || 'img'));
    if (!slides.length) return null;

    const intervalMs = parseInt(container.dataset.interval) || options.interval || 4000;
    let current = 0;
    let timer = null;

    function show(index) {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));

      if (container.classList.contains('carousel-images')) {
        container.style.transform = `translateX(-${index * 100}%)`;
      }

      current = index;
    }

    function next() {
      show((current + 1) % slides.length);
    }

    function start() {
      if (!timer) timer = setInterval(next, intervalMs);
    }

    function stop() {
      clearInterval(timer);
      timer = null;
    }

    let observer = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(e => (e.isIntersecting ? start() : stop()));
      }, { threshold: 0.3 });

      observer.observe(container);
    } else start();

    return { show, next, start, stop };
  }

  document.querySelectorAll('.slider').forEach(sl => {
    createSlider(sl, { slideSelector: '.slide', interval: 5000 });
  });

  document.querySelectorAll('.carousel-images').forEach(car => {
    createSlider(car, { slideSelector: 'img', interval: 5000 });
  });

});
