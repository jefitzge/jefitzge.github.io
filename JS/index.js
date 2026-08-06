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