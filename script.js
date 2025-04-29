// Mobile menu toggle
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Language selector toggle
const langButton = document.getElementById('langButton');
const langMenu = document.getElementById('langMenu');

langButton.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
});

// Close language menu when clicking outside
document.addEventListener('click', (event) => {
    if (!langButton.contains(event.target) && !langMenu.contains(event.target)) {
        langMenu.classList.add('hidden');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});