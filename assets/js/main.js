// ===== year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== sticky nav shrink =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== mobile menu toggle =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== ember particles in hero =====
const emberField = document.getElementById('embers');
if (emberField) {
  const spawnEmber = () => {
    const ember = document.createElement('span');
    ember.className = 'ember';
    const startX = Math.random() * 100;
    const drift = (Math.random() * 60 - 30) + 'px';
    const duration = 3 + Math.random() * 2.5;
    ember.style.left = startX + '%';
    ember.style.setProperty('--drift', drift);
    ember.style.animationDuration = duration + 's';
    emberField.appendChild(ember);
    setTimeout(() => ember.remove(), duration * 1000);
  };
  setInterval(spawnEmber, 350);
}
