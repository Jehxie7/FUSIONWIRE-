document.querySelectorAll('.fade-in').forEach(el => {
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.transition = "1s";
    el.style.opacity = 1;
  }, 300);
});