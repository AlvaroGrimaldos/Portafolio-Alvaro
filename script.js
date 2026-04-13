// =============================================
// SCRIPT.JS - Portafolio Álvaro Grimaldos
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // ==================== NAVBAR SCROLL ====================
    function handleNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    // ==================== MOBILE MENU ====================
    function setupMobileMenu() {
        const toggleBtn = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        if (!toggleBtn || !mobileMenu) return;

        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // ==================== TABS DE HABILIDADES ====================
    function setupTabs() {
        const techTab = document.getElementById('tab-tech');
        const softTab = document.getElementById('tab-soft');
        const techSkills = document.getElementById('tech-skills');
        const softSkills = document.getElementById('soft-skills');

        if (!techTab || !softTab) return;

        techTab.addEventListener('click', () => {
            techTab.classList.add('active');
            softTab.classList.remove('active');
            techSkills.classList.remove('hidden');
            softSkills.classList.add('hidden');
        });

        softTab.addEventListener('click', () => {
            softTab.classList.add('active');
            techTab.classList.remove('active');
            softSkills.classList.remove('hidden');
            techSkills.classList.add('hidden');
        });
    }

    // ==================== ANIMACIÓN DE CONTADORES ====================
    function animateCounters() {
        const counters = document.querySelectorAll('.counter[data-target]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 60; // ~60 frames
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 20);
        });
    }

    // ==================== CREACIÓN DE PARTÍCULAS ====================
    function createParticles() {
        const container = document.querySelector('.particles-container');
        if (!container) return;

        const particleCount = window.innerWidth < 768 ? 25 : 45;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.opacity = Math.random() * 0.4 + 0.1;
            particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
            particle.style.animationDelay = `-${Math.random() * 10}s`;

            container.appendChild(particle);
        }
    }

    // ==================== BACK TO TOP BUTTON ====================
    function handleBackToTop() {
        const backToTop = document.getElementById('back-to-top');
        if (!backToTop) return;

        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    // ==================== ANIMACIONES AL HACER SCROLL ====================
    function handleScrollAnimations() {
        const aboutSection = document.getElementById('sobremi');
        if (!aboutSection) return;

        const rect = aboutSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;

        const animateItems = aboutSection.querySelectorAll('.animate-item');
        animateItems.forEach(item => {
            if (isVisible) {
                item.classList.add('animate');
            }
        });
    }

    // ==================== OBSERVER PARA CONTADORES ====================
    function setupObservers() {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        const statsSection = document.querySelector('#sobremi .grid');
        if (statsSection) {
            counterObserver.observe(statsSection);
        }
    }

    // ==================== INIT ====================
    function init() {
        // Eventos de scroll
        window.addEventListener('scroll', handleNavbarScroll);
        window.addEventListener('scroll', handleBackToTop);
        window.addEventListener('scroll', handleScrollAnimations);

        // Inicializar funciones
        handleNavbarScroll();
        handleBackToTop();
        handleScrollAnimations();
        setupMobileMenu();
        setupTabs();
        createParticles();
        setupObservers();

        // Back to top click (si existe)
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        console.log('%c✅ Portafolio de Álvaro Grimaldos cargado correctamente', 'color: #3da5dd; font-weight: bold;');
    }

    // Ejecutar todo
    init();
});