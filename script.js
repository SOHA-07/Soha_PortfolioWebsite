// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    const isOpen = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a section
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Automatically update the footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form opens the visitor's email application.
// This does not store messages on a server.
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const subject = encodeURIComponent("Portfolio contact from " + name);
    const body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\nMessage: " + message
    );

    window.location.href =
        "mailto:25amtics104@gmail.com?subject=" + subject + "&body=" + body;
});
