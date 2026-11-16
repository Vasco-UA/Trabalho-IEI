console.log("Website loaded");
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the 'active' class on click
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Optional: Close menu automatically when a link is clicked on mobile
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});