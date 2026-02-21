document.addEventListener('DOMContentLoaded', () => {
    // Shared refs
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // Smooth scrolling + close mobile menu on link click
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navMenu.classList.remove('open');
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Active nav link highlight on scroll
    const sections = document.querySelectorAll('section[id], header[id]');

    const highlightNav = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav();
});
