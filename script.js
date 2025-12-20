// Simple JS: mobile nav toggle and contact form UX

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  // Mobile navigation toggle
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      siteNav.classList.toggle("open");
    });

    // Close nav when clicking a link (mobile)
    siteNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        siteNav.classList.remove("open");
      });
    });
  }

  // Contact form UX (no backend – just local feedback)
  if (form && status) {
    form.addEventListener("submit", e => {
      // Only show local feedback; Formspree handles the actual email
      status.textContent = "Sending... (you will be redirected after)";
      status.style.color = "#a0a3b1";

      // Clear any old message after 5 seconds
      setTimeout(() => {
        status.textContent = "";
      }, 5000);
    });
  }
});
