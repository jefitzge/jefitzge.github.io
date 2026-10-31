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

// Footer year  
document.getElementById("c_year").textContent = new Date().getFullYear();

// ---------- Navigation ----------
function initNav() {
  const nav = document.querySelector(".navbar");
  const toggle = nav && nav.querySelector(".nav-toggle");
  if (!nav || !toggle) return;

  const desktop = window.matchMedia("(min-width: 48em)");
  const submenuButtons = nav.querySelectorAll(".submenu-toggle");

  const setSubmenu = (button, open) => {
    button.setAttribute("aria-expanded", open);
    button.closest(".has-submenu").classList.toggle("is-open", open);
  };

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (!open) submenuButtons.forEach((btn) => setSubmenu(btn, false));
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));

  submenuButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setSubmenu(btn, btn.getAttribute("aria-expanded") !== "true");
    });
  });

  // Picking a link closes the menu
  nav.addEventListener("click", (e) => {
    if (e.target.closest(".navbar-menu a")) setOpen(false);
  });

  // Tap outside closes it
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) setOpen(false);
  });

  // Escape closes it and puts focus back on the button
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Growing past the breakpoint resets the mobile state
  desktop.addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });
}

initNav();