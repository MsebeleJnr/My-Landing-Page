// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Feature slider
const slider = document.querySelector('.features-slider');
const slides = slider.children;
let index = 0;

function showSlide(n) {
  index = (n + slides.length) % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = i === index ? 'block' : 'none';
  }
}

document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));

showSlide(index);

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
  } else {
    alert('Message sent successfully!');
    // Optionally, you can add code to submit the form data via AJAX here
    this.reset();
  }
});
