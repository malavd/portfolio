// Simple JS: mobile nav + fake contact form handler

document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const siteNav = document.getElementById("site-nav");
  
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
  
    // Trivial contact form handler (no backend)
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
  
    if (form && status) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get("name");
  
        status.textContent = `Thanks${name ? `, ${name}` : ""}. Your message has been recorded locally. Connect this form to email or an API when you’re ready.`;
        form.reset();
      });
    }
  });
  