// Modern Portfolio - Enhanced JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const navLinks = document.querySelectorAll(".nav-link");

  // Mobile navigation toggle
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      siteNav.classList.toggle("open");
    });

    // Close nav when clicking a link (mobile)
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        siteNav.classList.remove("open");
      });
    });

    // Close nav when clicking outside
    document.addEventListener("click", (e) => {
      if (!siteNav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove("open");
        siteNav.classList.remove("open");
      }
    });
  }

  // Active nav link highlighting on scroll
  const sections = document.querySelectorAll(".section[id]");
  
  const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add("active");
      } else {
        navLink?.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", highlightNav);

  // Smooth scroll with offset
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // Contact form handling
  if (form && status) {
    form.addEventListener("submit", (e) => {
      status.textContent = "Sending your message...";
      status.style.color = "#4f9dff";

      setTimeout(() => {
        status.textContent = "";
      }, 5000);
    });
  }

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".narrative-block, .timeline-item, .skills-column, .edu-block, .cert-card"
  );

  animateElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Parallax effect for gradient orbs
  window.addEventListener("mousemove", (e) => {
    const orbs = document.querySelectorAll(".gradient-orb");
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 20;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      orb.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
});
