// Responsive Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  // Close menu on nav link click (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Smooth Scrolling for Nav Links
const links = document.querySelectorAll('a.nav-link');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // adjust for navbar height
          behavior: 'smooth'
        });
      }
    }
  });
});

// Project Card Hover Effect (add a class for JS-powered animation)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('js-hover'));
  card.addEventListener('mouseleave', () => card.classList.remove('js-hover'));
});

// Contact Form Validation and Feedback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    let valid = true;
    if (!name) valid = false;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) valid = false;
    if (!message) valid = false;
    // Remove previous feedback
    let feedback = this.querySelector('.form-feedback');
    if (feedback) feedback.remove();
    feedback = document.createElement('div');
    feedback.className = 'form-feedback';
    if (valid) {
      feedback.textContent = 'Thank you for your message!';
      feedback.style.color = 'green';
      this.reset();
    } else {
      feedback.textContent = 'Please fill out all fields with a valid email.';
      feedback.style.color = 'red';
    }
    this.appendChild(feedback);
  });
}

// Animate Skill Items on Scroll
function animateOnScroll(selector, animationClass) {
  const elements = document.querySelectorAll(selector);
  function check() {
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add(animationClass);
      }
    });
  }
  window.addEventListener('scroll', check);
  check();
}
animateOnScroll('.skill-item', 'animate-skill');

// Animate Hero Background (simple floating effect)
const heroBg = document.querySelector('.hero-bg-animation');
if (heroBg) {
  let pos = 0;
  let direction = 1;
  setInterval(() => {
    pos += direction * 0.5;
    if (pos > 20 || pos < -20) direction *= -1;
    heroBg.style.transform = `translateY(${pos}px)`;
  }, 50);
}


