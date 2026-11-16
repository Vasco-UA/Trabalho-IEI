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

    // --- ADDED: Real-Time Performance Telemetry Simulation ---
    const latencyEl = document.querySelector('.metric-card:nth-child(2) .metric-value');
    const cpuEl = document.querySelector('.metric-card:nth-child(3) .metric-value');

    if (latencyEl && cpuEl) {
        setInterval(() => {
            // Randomize latency between 10ms and 18ms
            const newLatency = Math.floor(Math.random() * 9) + 10;
            latencyEl.textContent = `${newLatency}ms`;

            // Randomize CPU usage between 1.5% and 3.2%
            const newCpu = (Math.random() * 1.7 + 1.5).toFixed(1);
            cpuEl.textContent = `${newCpu}%`;
        }, 3000); // Updates every 3 seconds
    }
});

// --- ADDED: Scroll Spy (Highlight Active Navbar Link) ---
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        // Check if user has scrolled past the top of the section (minus 120px offset for the navbar)
        if (window.scrollY >= (sectionTop - 120)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});