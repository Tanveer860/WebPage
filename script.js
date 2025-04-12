window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const button = document.querySelector('.glow-button');
  const glow = button.querySelector('.glow');

  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    glow.style.opacity = '1';
  });

  button.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });
});

// Keep sparkle effect outside so it always works
document.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 2; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;
    const size = Math.random() * 3 + 1.5;

    sparkle.style.left = `${e.clientX + offsetX}px`;
    sparkle.style.top = `${e.clientY + offsetY}px`;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    sparkle.style.background = 'white';

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1600);
  }
});