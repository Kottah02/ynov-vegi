// Gestion du menu mobile
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;
document.querySelector('nav').prepend(menuToggle);

const nav = document.querySelector('nav ul');
const header = document.querySelector('header');
let lastScroll = 0;

// Gestion du menu mobile
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});

// Gestion du scroll
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Ajouter/supprimer la classe scrolled
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Masquer/afficher la barre de navigation lors du défilement
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Marquer le lien actif
document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Effet de brillance au survol
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const shine = document.createElement('div');
        shine.className = 'shine-effect';
        shine.style.left = `${x}px`;
        shine.style.top = `${y}px`;

        e.target.appendChild(shine);
        setTimeout(() => shine.remove(), 1000);
    });
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    }
});

// Animation de transition entre les pages
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});

// Ajouter un effet de parallaxe subtil à la barre de navigation
window.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        header.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
}); 