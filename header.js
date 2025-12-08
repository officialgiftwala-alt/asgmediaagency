document.getElementById('header').innerHTML = `
<div class="overlay"></div>
<header>
  <div class="logo">
    <img src="icon.png" alt="Brand Motive Marketing">
  </div>
  <nav class="nav-links">
    <a href="#home">HOME</a>
    <a href="#services">OUR SERVICES</a>
    <a href="#team">OUR TEAM</a>
    <a href="#testimonials">TESTIMONIALS</a>
    <a href="#works">OUR WORKS</a>
  </nav>
  <div class="menu-btn">
    <span></span>
    <span></span>
    <span></span>
  </div>
</header>
<div class="navbar">
  <button class="close-btn">✕</button>
  <div class="navbar-logo">
    <img src="icon_wh.png" alt="Brand Motive Marketing">
  </div>
  <div class="navbar-links"></div>
  <div class="navbar-contact">
    <h3>Get In Touch</h3>
    <div class="contact-item">
      <div class="contact-icon">
        <i class="fa-solid fa-envelope"></i>
      </div>
      <div class="contact-info">
        <span>Email</span>
        <span>asgmidiyaagency@gmail.com</span>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-icon">
        <i class="fa-solid fa-phone"></i>
      </div>
      <div class="contact-info">
        <span>Phone</span>
        <span>+91 86953 83684</span>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-icon">
        <i class="fa-solid fa-location-dot"></i>
      </div>
      <div class="contact-info">
        <span>Location</span>
        <span>Salt Lake City, West Bengal, India.</span>
      </div>
    </div>
  </div>
</div>
`;

const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('header');
const navbarLinks = document.querySelector('.navbar-links');

function updateMenuContent() {
    if (window.innerWidth <= 768) {
        navbarLinks.innerHTML = `
            <a href="#home">HOME</a>
            <a href="#services">OUR SERVICES</a>
            <a href="#team">OUR TEAM</a>
            <a href="#testimonials">TESTIMONIALS</a>
            <a href="#works">OUR WORKS</a>
        `;
    } else {
        navbarLinks.innerHTML = '';
    }
}

updateMenuContent();

window.addEventListener('resize', updateMenuContent);

menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
