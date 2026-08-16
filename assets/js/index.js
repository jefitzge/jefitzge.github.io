"use strict";

const toggleSwitch = document.querySelector("#theme-toggle");

// Load saved theme
const currentTheme = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute("data-theme", currentTheme);
toggleSwitch.checked = currentTheme === "dark";

// Toggle theme
toggleSwitch.addEventListener("change", () => {
    const theme = toggleSwitch.checked ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
});

// Auto-adjust card heights
document.querySelectorAll('.card').forEach((card) => {
  const textEl = card.querySelector('.card-text p');
  const wrapEl = card.querySelector('.card-text');
  const btn = card.querySelector('.expand-btn');
  if (!textEl || !wrapEl || !btn) return;

  const checkOverflow = () => {
    if (card.classList.contains('is-expanded')) return;
    const overflowing = textEl.scrollHeight > wrapEl.clientHeight + 1;
    card.classList.toggle('has-overflow', overflowing);
  };

  checkOverflow();
  window.addEventListener('resize', checkOverflow);

  btn.addEventListener('click', () => {
    const expanding = !card.classList.contains('is-expanded');
    card.classList.toggle('is-expanded', expanding);
    if (!expanding) {
      requestAnimationFrame(checkOverflow);
    }
  });
});