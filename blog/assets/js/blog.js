// Blog Interactive Features
document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scrolling for anchor links
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

  // Add copy button to code blocks
  document.querySelectorAll('pre').forEach(function(pre) {
    // Create copy button
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerHTML = '<i class="fas fa-copy"></i>';
    button.title = 'Copy code';
    
    // Add button to pre block
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    // Copy functionality
    button.addEventListener('click', function() {
      const code = pre.querySelector('code');
      const text = code ? code.innerText : pre.innerText;
      
      navigator.clipboard.writeText(text).then(function() {
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.color = '#28a745';
        
        setTimeout(function() {
          button.innerHTML = '<i class="fas fa-copy"></i>';
          button.style.color = '';
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy code: ', err);
      });
    });
  });

  // Reading progress indicator
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });

  // External links open in new tab
  document.querySelectorAll('.post-content a').forEach(function(link) {
    if (link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // Image lazy loading enhancement
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  }

  // Table of contents generation (if needed)
  const postContent = document.querySelector('.post-content');
  if (postContent) {
    const headings = postContent.querySelectorAll('h2, h3');
    if (headings.length > 3) {
      const toc = document.createElement('div');
      toc.className = 'table-of-contents';
      toc.innerHTML = '<h3>Table of Contents</h3><ul></ul>';
      
      const tocList = toc.querySelector('ul');
      headings.forEach((heading, index) => {
        const id = 'heading-' + index;
        heading.id = id;
        
        const li = document.createElement('li');
        li.className = heading.tagName.toLowerCase();
        li.innerHTML = `<a href="#${id}">${heading.textContent}</a>`;
        tocList.appendChild(li);
      });
      
      postContent.insertBefore(toc, postContent.firstChild);
    }
  }
});
