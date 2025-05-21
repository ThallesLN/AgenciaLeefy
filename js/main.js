document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
    
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        });
    });
    
    document.querySelectorAll('a[href^="#"]:not(.navbar-nav a)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar-custom')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveSection() {
        const scrollPosition = window.scrollY;
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.main-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                
                document.querySelector(`.main-nav a[href="#${sectionId}"]`)?.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    
    const animateElements = document.querySelectorAll('.servico-card, .vantagem-card, .servico-detalhe');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', checkIfInView);
    checkIfInView();
    
    // SE FOR MEXER AQUI TEM QUE VER NO ADDITIONAL.CSS E STYLES.CSS PRIMEIRO
    const style = document.createElement('style');
    style.textContent = `
        .servico-card, .vantagem-card, .servico-detalhe {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .servico-card.animate, .vantagem-card.animate, .servico-detalhe.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .menu-toggle span.active:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .menu-toggle span.active:nth-child(2) {
            opacity: 0;
        }
        
        .menu-toggle span.active:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    `;
    document.head.appendChild(style);
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                
                const offsetTop = targetSection.offsetTop;
                
                
                window.scrollTo({
                    top: offsetTop - 100, // Acho que não está funcionando pois ajustei o header pelo html, tem que testar, não tirei pra não dar merda
                    behavior: 'smooth'
                });
            }
        });
    });
});

