 // Smooth Scrolling for Anchor Links
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
 // Navbar Hamburger Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }));

        // Simple form submission handler (for demo; replace with actual backend integration)
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon. (This is a demo - integrate with a backend for real submissions.)');
            this.reset();
        });

        // Search icon click (basic functionality)
        document.querySelector('.search-icon').addEventListener('click', function() {
            const input = document.querySelector('.search-input');
            if (input.value) {
                // Simulate search (replace with actual search logic)
                alert('Searching for: ' + input.value);
            }
        });
        // Simple Animation on Scroll (using Intersection Observer for performance)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';

                }
            });
        }, observerOptions);

        // Observe sections for fade-in effect
        document.querySelectorAll('.services, .stats, .about-snippet, .contact-cta').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);

        });
         document.querySelector('.search-icon').addEventListener('click', function() {
      const input = document.querySelector('.search-input');
      const query = input.value.trim();

      if (query) {
          // 🔹 Option 1: Google Search
          // const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

          // 🔹 Option 2: DuckDuckGo (Open Source / Privacy Friendly)
          const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;

          // 🔹 Open search in new tab
          window.open(searchUrl, '_blank');
      } else {
          alert('Please enter something to search!');
      }
  });

  // Optional: Press Enter key to search
  document.querySelector('.search-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          document.querySelector('.search-icon').click();
      }
  });