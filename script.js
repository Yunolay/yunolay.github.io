document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Add Glitch Effect class dynamically if needed later
    const glitchElement = document.querySelector('.glitch');
    if(glitchElement) {
        // Additional creative logic can go here
    }
});
