// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fade-in animation on scroll
const cards = document.querySelectorAll('.feature-card, .service-card, .testimonial-card, .team-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity=1;
      entry.target.style.transform='translateY(0)';
    }
  });
},{threshold:0.1});

cards.forEach(card=>observer.observe(card));
