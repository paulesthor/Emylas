// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {

    // 1. FORCER LE SCROLL EN HAUT AU CHARGEMENT
    // Cela corrige le problème où la page charge au milieu
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);


    // 2. GESTION DU MENU BURGER (MOBILE)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger){
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animation des liens
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Animation du burger
            burger.classList.toggle('toggle');
        });
    }

    // 3. FERMER LE MENU QUAND ON CLIQUE SUR UN LIEN
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
             if(nav.classList.contains('nav-active')){
                 nav.classList.remove('nav-active');
                 burger.classList.remove('toggle');
                 navLinks.forEach((link) => {
                    link.style.animation = '';
                 });
             }
        });
    });

    // 4. CHANGEMENT DE COULEUR DE LA NAV AU SCROLL
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 1)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            // Si on est tout en haut, on peut la rendre un peu plus transparente si voulu
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});