// Main Javascript for Club Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }

    // Close mobile nav when clicking a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow and reduce height on scroll
        if (scrollTop > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.height = '70px';
        } else {
            header.style.boxShadow = 'none';
            header.style.height = '80px';
        }
        
        lastScrollTop = scrollTop;
    });

    // Scroll Animation
    const scrollElements = document.querySelectorAll('.scroll-animation');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('active');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('active');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Initialize scroll animation
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Run once on load
    handleScrollAnimation();

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                // Here we would normally send this to a server
                alert('Thank you for subscribing with: ' + email);
                this.reset();
            }
        });
    }

    // Animate elements on page load
    const animateElements = document.querySelectorAll('.animate__animated');
    animateElements.forEach((el, index) => {
        // Add a staggered delay effect
        if (!el.style.animationDelay) {
            el.style.animationDelay = `${index * 0.1}s`;
        }
        el.style.opacity = '1';
    });
});

// Initialize event calendar if it exists on the page
function initEventCalendar() {
    const calendarEl = document.getElementById('eventCalendar');
    if (!calendarEl) return;
    
    // Sample events data
    const events = [
        {
            title: 'Annual Meeting',
            start: '2025-05-15',
            url: '#event1'
        },
        {
            title: 'Workshop Series',
            start: '2025-05-22',
            url: '#event2'
        },
        {
            title: 'Networking Night',
            start: '2025-05-30',
            url: '#event3'
        }
    ];
    
    // Calendar setup would go here if using a library like FullCalendar
    // This is a placeholder for demonstration
    console.log('Calendar would be initialized with:', events);
    
    // For now, let's just create a simple list of events
    const eventList = document.createElement('div');
    eventList.className = 'simple-event-list';
    
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'simple-event-item';
        eventItem.innerHTML = `
            <div class="event-date">${new Date(event.start).toLocaleDateString()}</div>
            <div class="event-title"><a href="${event.url}">${event.title}</a></div>
        `;
        eventList.appendChild(eventItem);
    });
    
    calendarEl.appendChild(eventList);
}

// Call calendar init function if on events page
if (window.location.href.includes('events.html')) {
    window.addEventListener('DOMContentLoaded', initEventCalendar);
}

// Image gallery lightbox functionality
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length === 0) return;
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            const imgAlt = this.querySelector('img').getAttribute('alt');
            
            // Create lightbox elements
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <img src="${imgSrc}" alt="${imgAlt}">
                    <p class="lightbox-caption">${imgAlt}</p>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox when clicking close button or outside the image
            const closeLightbox = document.querySelector('.close-lightbox');
            closeLightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
                document.body.style.overflow = '';
            });
            
            lightbox.addEventListener('click', function(e) {
                if (e.target === this) {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = '';
                }
            });
        });
    });
}

// Call gallery init function if on gallery page
if (window.location.href.includes('gallery.html')) {
    window.addEventListener('DOMContentLoaded', initGallery);
}