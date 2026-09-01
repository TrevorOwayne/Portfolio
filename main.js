// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    
    let serviceName = '';
    switch(service) {
        case 'flyer': serviceName = 'Flyer Design'; break;
        case 'web1': serviceName = '1 Page Website'; break;
        case 'web3': serviceName = '3 Page Website'; break;
        case 'web5': serviceName = '5 Page Website'; break;
        default: serviceName = 'Custom Project';
    }
    
    alert(`Thanks ${name}! Your request for ${serviceName} has been received. I'll respond within 2 hours.`);
    
    this.reset();
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    }
});