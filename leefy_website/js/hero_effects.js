/* LEEFY NÃO QUIS MOVIMENTAÇÃO DA IMAGEM HERO, CÓDIGO FICOU AQUI, CASO MUDE DE IDEIA BASTA DESCOMENTAR*/

/*
document.addEventListener('DOMContentLoaded', function() {
    //parallax na imagem de fundo
    function setupHeroParallax() {
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.classList.add('parallax');
            
            window.addEventListener('scroll', function() {
                //parallax quando section estiver visível
                const scrollPosition = window.pageYOffset;
                const heroSection = document.querySelector('.hero');
                const heroHeight = heroSection.offsetHeight;
                
                if (scrollPosition <= heroHeight) {
                    //velocidade de movimento menor que o scroll
                    const translateY = scrollPosition * 0.3;
                    heroImage.style.transform = `translateY(${translateY}px)`;
                }
            });
        }
    }
*/
    // animação hero, se tirar o comentário do resto do código favor não esquecer de excluir a inicialização da
    // function pois ta duplicado
    function animateHeroContent() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            setTimeout(() => {
                heroContent.classList.add('animate-in');
            }, 300);
        }
    }

    animateHeroContent();
/*
    function addHeroAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .hero-content {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            
            .hero-content.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    setupHeroParallax();
    addHeroAnimationStyles();
    animateHeroContent();
});

*/