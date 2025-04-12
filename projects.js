window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

