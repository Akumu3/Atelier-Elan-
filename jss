// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission
const form = document.querySelector('#contactForm');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
        form.reset();
    });
}
