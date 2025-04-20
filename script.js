const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function scrollToSection(sectionId) {
  document.querySelector(`.${sectionId}`).scrollIntoView({ behavior: 'smooth' });
}

function revealOnScroll() {
  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible'); // hides again when out of view
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);