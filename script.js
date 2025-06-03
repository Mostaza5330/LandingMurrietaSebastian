        document.addEventListener('DOMContentLoaded', function() {
            // Animación suave para las secciones al hacer scroll
            const sections = document.querySelectorAll('section');
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            // Efecto de cursor personalizado para las películas
            const movieItems = document.querySelectorAll('#series-peliculas li');
            movieItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.cursor = 'pointer';
                });
                
                item.addEventListener('click', function() {
                    this.style.animation = 'pulse 0.3s ease-in-out';
                    setTimeout(() => {
                        this.style.animation = '';
                    }, 300);
                });
            });

            // Efecto parallax sutil para el header
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const header = document.querySelector('header');
                if (header) {
                    header.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
            });
        });