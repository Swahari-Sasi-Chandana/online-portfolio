// AOS Animation
AOS.init({
    duration: 1000,
    once: true
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.innerHTML = "☀️";
}

toggleBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.innerHTML = "🌙";
    }
};