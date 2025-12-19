// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple typing effect for subtitle (optional)
const subtitle = document.querySelector('.subtitle');
const original = subtitle.textContent;
subtitle.textContent = '';
let i = 0;
function type() {
  if (i <= original.length) {
    subtitle.textContent = original.slice(0, i++);
    requestAnimationFrame(type);
  }
}
type();