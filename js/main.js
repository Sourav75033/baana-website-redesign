// ===================================
// BAANA Website - Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate hamburger menu
      const spans = menuToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
  
  // Scroll to Top Button
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Active Navigation Link
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentLocation || 
        (currentLocation === '/' && linkPath.includes('index.html')) ||
        (currentLocation.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });
  
  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Intersection Observer for Fade-in Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.card, .icon-card, .event-card, .stat-item');
  animateElements.forEach(el => {
    observer.observe(el);
  });
  
  // Form Validation
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('input[name="name"]').value.trim();
      const email = this.querySelector('input[name="email"]').value.trim();
      const message = this.querySelector('textarea[name="message"]').value.trim();
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Success message (in production, this would submit to a server)
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
  
  // Gallery Lightbox (Simple Implementation)
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      if (img) {
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
          <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${img.src}" alt="${img.alt}">
          </div>
        `;
        
        // Add styles
        lightbox.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        `;
        
        const content = lightbox.querySelector('.lightbox-content');
        content.style.cssText = `
          position: relative;
          max-width: 90%;
          max-height: 90%;
        `;
        
        const close = lightbox.querySelector('.lightbox-close');
        close.style.cssText = `
          position: absolute;
          top: -40px;
          right: 0;
          color: white;
          font-size: 40px;
          cursor: pointer;
          transition: color 0.3s ease;
        `;
        
        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.style.cssText = `
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Close lightbox
        close.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
          if (e.target === lightbox) {
            closeLightbox();
          }
        });
        
        function closeLightbox() {
          lightbox.style.animation = 'fadeOut 0.3s ease';
          setTimeout(() => {
            document.body.removeChild(lightbox);
            document.body.style.overflow = 'auto';
          }, 300);
        }
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
            closeLightbox();
          }
        });
      }
    });
  });
  
  // Counter Animation for Stats
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateCounter = (element) => {
    const target = parseInt(element.textContent);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + '+';
      }
    };
    
    updateCounter();
  };
  
  // Observe stats for counter animation
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumber = entry.target;
        animateCounter(statNumber);
        statsObserver.unobserve(statNumber);
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => {
    statsObserver.observe(stat);
  });
  
});

// Add fadeIn and fadeOut animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(style);

// Made with Bob
