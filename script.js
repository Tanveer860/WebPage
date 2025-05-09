window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const container = document.querySelector('.firefly-container');
  const fireflyCount = 60;

  for (let i = 0; i < fireflyCount; i++) {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');

    firefly.style.top = Math.random() * 100 + 'vh';
    firefly.style.left = Math.random() * 100 + 'vw';

    const size = 3 + Math.random() * 5;
    firefly.style.width = size + 'px';
    firefly.style.height = size + 'px';

    const duration = 12 + Math.random() * 8;
    const delay = Math.random() * 8;

    firefly.style.animationDuration = `${duration}s, 3s`;
    firefly.style.animationDelay = `${delay}s, ${delay % 2}s`;

    container.appendChild(firefly);
  }

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

// Only one switchDiv function needed
function switchDiv(showId, hideId) {
  const showDiv = document.getElementById(showId);
  const hideDiv = document.getElementById(hideId);

  // Hide current
  hideDiv.classList.remove("visible");
  hideDiv.classList.add("hidden");

  // Wait for fade-out (e.g. 500ms) before showing next
  setTimeout(() => {
    showDiv.classList.remove("hidden");
    showDiv.classList.add("visible");
  }, 500); // <-- matches your CSS transition time
}

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