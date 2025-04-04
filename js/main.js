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
});
