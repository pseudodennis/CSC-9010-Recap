document.addEventListener('DOMContentLoaded', () => {
    // Slideshow variables
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    // Removed autoSlideInterval variable as we're disabling auto-advance

    // Initialize the slideshow
    function initSlideshow() {
        // Show first slide
        showSlide(currentSlide);
        
        // Auto-rotation disabled
        // startAutoSlide() call removed

        // Add event listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        // Add dot navigation
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                showSlide(slideIndex);
            });
        });

        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyboardNav);
    }

    // Show a specific slide
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Update current slide index
        currentSlide = index;
        
        // Auto-slide reset removed
    }

    // Navigate to next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Navigate to previous slide
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    // Handle keyboard navigation
    function handleKeyboardNav(event) {
        switch(event.key) {
            case 'ArrowLeft':
                prevSlide();
                break;
            case 'ArrowRight':
                nextSlide();
                break;
        }
    }

    // Auto-slide functions removed:
    // - startAutoSlide()
    // - resetAutoSlide()
    // - mouseenter and mouseleave event listeners

    // Initialize slideshow
    initSlideshow();
});