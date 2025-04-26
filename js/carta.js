document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad de las pestañas de la carta
    const tabs = document.querySelectorAll('.carta-tab');
    const categorias = document.querySelectorAll('.carta-categoria');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    let autoSlideInterval;
    const AUTO_SLIDE_INTERVAL = 5000; // 5 segundos entre cambios

    function mostrarCategoria(categoria) {
        // Detener el intervalo automático actual
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }

        // Ocultar todas las categorías
        categorias.forEach(cat => {
            cat.classList.remove('active');
        });
        
        // Mostrar la categoría seleccionada
        document.getElementById(categoria).classList.add('active');

        // Actualizar las pestañas activas
        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.categoria === categoria) {
                tab.classList.add('active');
            }
        });

        // Actualizar el carrusel
        actualizarCarrusel(categoria);
    }

    function actualizarCarrusel(categoria) {
        // Mostrar solo los slides de la categoría actual (todos a la vez)
        slides.forEach(slide => {
            if (slide.dataset.categoria === categoria) {
                slide.style.display = 'flex';
                slide.classList.add('active');
            } else {
                slide.style.display = 'none';
                slide.classList.remove('active', 'fade-in', 'fade-out');
            }
        });
        // No indicadores ni auto-slide en modo multi-imagen
    }

    function actualizarIndicadores(slidesCategoria) {
        const indicators = document.querySelector('.carousel-indicators');
        indicators.innerHTML = '';
        
        slidesCategoria.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === currentSlide) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentSlide = index;
                actualizarSlide(slidesCategoria);
                resetAutoSlide(slidesCategoria);
            });
            indicators.appendChild(dot);
        });
    }

    function actualizarSlide(slidesCategoria) {
        const currentActiveSlide = document.querySelector('.carousel-slide.active');
        const nextSlide = slidesCategoria[currentSlide];

        if (currentActiveSlide) {
            currentActiveSlide.classList.add('fade-out');
            currentActiveSlide.classList.remove('fade-in');
        }

        setTimeout(() => {
            slidesCategoria.forEach((slide, index) => {
                slide.style.display = index === currentSlide ? 'block' : 'none';
                if (index === currentSlide) {
                    slide.classList.add('active', 'fade-in');
                    slide.classList.remove('fade-out');
                } else {
                    slide.classList.remove('active', 'fade-in', 'fade-out');
                }
            });

            const dots = document.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }, 400);
    }

    function siguienteSlide(slidesCategoria) {
        currentSlide = (currentSlide + 1) % slidesCategoria.length;
        actualizarSlide(slidesCategoria);
    }

    function anteriorSlide(slidesCategoria) {
        currentSlide = (currentSlide - 1 + slidesCategoria.length) % slidesCategoria.length;
        actualizarSlide(slidesCategoria);
    }

    function iniciarAutoSlide(slidesCategoria) {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
        autoSlideInterval = setInterval(() => {
            siguienteSlide(slidesCategoria);
        }, AUTO_SLIDE_INTERVAL);
    }

    function resetAutoSlide(slidesCategoria) {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
        iniciarAutoSlide(slidesCategoria);
    }

    // Event listeners para las pestañas
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            mostrarCategoria(tab.dataset.categoria);
        });
    });

    // Event listeners para los botones del carrusel
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    prevButton.addEventListener('click', () => {
        const categoriaActual = document.querySelector('.carta-tab.active').dataset.categoria;
        const slidesCategoria = document.querySelectorAll(`.carousel-slide[data-categoria="${categoriaActual}"]`);
        anteriorSlide(slidesCategoria);
        resetAutoSlide(slidesCategoria);
    });

    nextButton.addEventListener('click', () => {
        const categoriaActual = document.querySelector('.carta-tab.active').dataset.categoria;
        const slidesCategoria = document.querySelectorAll(`.carousel-slide[data-categoria="${categoriaActual}"]`);
        siguienteSlide(slidesCategoria);
        resetAutoSlide(slidesCategoria);
    });

    // Iniciar con la primera categoría
    mostrarCategoria('platos');
}); 