console.log("Website loaded");

document.addEventListener('DOMContentLoaded', () => {

    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.isClickNavigation = false;

    navToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {

            window.isClickNavigation = true;

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
            }

            setTimeout(() => {
                window.isClickNavigation = false;
            }, 600);

        });
    });

    const latencyEl = document.querySelector('#latency-value');
    const cpuEl = document.querySelector('#cpu-value');

    if (latencyEl && cpuEl) {

        setInterval(() => {

            const newLatency =
                Math.floor(Math.random() * 9) + 10;

            latencyEl.textContent = `${newLatency}ms`;

            const newCpu =
                (Math.random() * 1.7 + 1.5).toFixed(1);

            cpuEl.textContent = `${newCpu}%`;

        }, 3000);

    }

    const track = document.querySelector('.carousel-track');

    if (track) {

        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const dotsNav = document.querySelector('.carousel-nav');
        const dots = Array.from(dotsNav.children);

        const moveToSlide = (
            track,
            currentSlide,
            targetSlide
        ) => {

            const targetIndex =
                slides.indexOf(targetSlide);

            track.style.transform =
                `translateX(-${targetIndex * 100}%)`;

            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');

        };

        const updateDots = (currentDot, targetDot) => {

            currentDot.classList.remove('current-slide');
            targetDot.classList.add('current-slide');

        };

        prevButton.addEventListener('click', () => {

            const currentSlide =
                track.querySelector('.current-slide');

            const prevSlide =
                currentSlide.previousElementSibling ||
                slides[slides.length - 1];

            const currentDot =
                dotsNav.querySelector('.current-slide');

            const prevDot =
                currentDot.previousElementSibling ||
                dots[dots.length - 1];

            moveToSlide(
                track,
                currentSlide,
                prevSlide
            );

            updateDots(
                currentDot,
                prevDot
            );

        });

        nextButton.addEventListener('click', () => {

            const currentSlide =
                track.querySelector('.current-slide');

            const nextSlide =
                currentSlide.nextElementSibling ||
                slides[0];

            const currentDot =
                dotsNav.querySelector('.current-slide');

            const nextDot =
                currentDot.nextElementSibling ||
                dots[0];

            moveToSlide(
                track,
                currentSlide,
                nextSlide
            );

            updateDots(
                currentDot,
                nextDot
            );

        });

        dotsNav.addEventListener('click', e => {

            const targetDot =
                e.target.closest('button');

            if (!targetDot) return;

            const currentSlide =
                track.querySelector('.current-slide');

            const currentDot =
                dotsNav.querySelector('.current-slide');

            const targetIndex =
                dots.indexOf(targetDot);

            const targetSlide =
                slides[targetIndex];

            moveToSlide(
                track,
                currentSlide,
                targetSlide
            );

            updateDots(
                currentDot,
                targetDot
            );

        });

    }

    updateScrollSpy();

});

function updateScrollSpy() {

    if (window.isClickNavigation) return;

    const sections =
        document.querySelectorAll('.section');

    const navLinks =
        document.querySelectorAll('.nav-links a');

    let currentSection = '';
    const scrollPosition = window.scrollY;

    if (scrollPosition < 100) {

        navLinks.forEach(link =>
            link.classList.remove('active')
        );

        return;
    }

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            (sectionTop + sectionHeight)
        ) {

            currentSection =
                section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        if (
            link.getAttribute('href') ===
            `#${currentSection}`
        ) {

            navLinks.forEach(l =>
                l.classList.remove('active')
            );

            link.classList.add('active');

        }

    });

}

window.addEventListener(
    'scroll',
    updateScrollSpy
);