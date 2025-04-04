// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // Navigation scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    // Create indicators
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = Array.from(indicatorsContainer.children);
    
    // Set initial active slide
    slides[0].classList.add('active');
    
    // Move to slide function
    const moveToSlide = (currentIndex, targetIndex) => {
        // Calculate how far to slide
        const slideWidth = slides[0].getBoundingClientRect().width;
        const amountToMove = targetIndex * (slideWidth + slideWidth * 0.04); // 4% margin
        
        // Move the track
        track.style.transform = `translateX(-${amountToMove}px)`;
        
        // Update active class
        slides.forEach(slide => slide.classList.remove('active'));
        slides[targetIndex].classList.add('active');
        
        // Update indicators
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[targetIndex].classList.add('active');
    };
    
    // Next button click
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.active');
        const currentIndex = slides.indexOf(currentSlide);
        let nextIndex = currentIndex + 1;
        
        // Loop back to first slide if at the end
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        
        moveToSlide(currentIndex, nextIndex);
    });
    
    // Previous button click
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.active');
        const currentIndex = slides.indexOf(currentSlide);
        let prevIndex = currentIndex - 1;
        
        // Loop to last slide if at the beginning
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        
        moveToSlide(currentIndex, prevIndex);
    });
    
    // Indicator click
    indicatorsContainer.addEventListener('click', e => {
        const targetIndicator = e.target.closest('div.indicator');
        
        if (!targetIndicator) return;
        
        const currentSlide = track.querySelector('.active');
        const currentIndex = slides.indexOf(currentSlide);
        const targetIndex = parseInt(targetIndicator.dataset.index);
        
        moveToSlide(currentIndex, targetIndex);
    });
    
    // Auto slide every 5 seconds
    setInterval(() => {
        const currentSlide = track.querySelector('.active');
        const currentIndex = slides.indexOf(currentSlide);
        let nextIndex = currentIndex + 1;
        
        // Loop back to first slide if at the end
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        
        moveToSlide(currentIndex, nextIndex);
    }, 5000);

    // Menu tabs functionality
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get category to show
            const categoryToShow = this.getAttribute('data-category');
            
            // Hide all categories with smooth animation
            menuCategories.forEach(category => {
                category.classList.remove('active');
            });
            
            // Show selected category with smooth animation
            document.getElementById(categoryToShow).classList.add('active');
        });
    });

    // Reservation modal
    const reservationBtn = document.querySelector('.btn-reserva');
    const reservationModal = document.querySelector('.reservation-modal');
    const closeModal = document.querySelector('.close-modal');
    
    reservationBtn.addEventListener('click', function() {
        reservationModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', function() {
        reservationModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    reservationModal.addEventListener('click', function(e) {
        if (e.target === reservationModal) {
            reservationModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Form submission
    const reservationForm = document.getElementById('reservation-form');
    
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would normally send the form data to a server
        // For now, we'll just show a success message
        
        const formData = new FormData(reservationForm);
        let formValues = {};
        
        for (let [key, value] of formData.entries()) {
            formValues[key] = value;
        }
        
        console.log('Form submitted:', formValues);
        
        // Show success message (in a real application, this would happen after successful submission)
        alert('¡Reserva realizada con éxito! Te contactaremos pronto para confirmar.');
        
        // Close modal and reset form
        reservationModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        reservationForm.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funcionalidad para dispositivos móviles
    // Detectar si es un dispositivo móvil
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Ajustar comportamiento del menú interactivo en móviles
        const menuItems = document.querySelectorAll('.item input[type="radio"]');
        const menuLabels = document.querySelectorAll('.item label');
        
        menuLabels.forEach(label => {
            label.addEventListener('click', function() {
                // Asegurar que el contenido sea visible al hacer scroll
                setTimeout(() => {
                    const content = this.nextElementSibling;
                    if (content && content.classList.contains('content')) {
                        const offsetTop = content.offsetTop;
                        window.scrollTo({
                            top: offsetTop - 20,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            });
        });
        
        // Ajustar la galería para dispositivos móviles
        const gallery = document.querySelector('.gallery');
        if (gallery) {
            // Reducir la duración de la animación en móviles para mejor rendimiento
            gallery.style.setProperty('--d', '8s');
        }
    }
});
