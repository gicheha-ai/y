// Service Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get service name from URL
    const serviceName = window.location.pathname.split('/').pop().replace('.html', '').replace('-', ' ');
    
    // Set service title
    const serviceTitle = document.querySelector('.service-hero h1');
    if(serviceTitle && serviceName) {
        serviceTitle.textContent = serviceName.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
    
    // Form handling
    const quoteForm = document.getElementById('quoteForm');
    if(quoteForm) {
        // Set service name in hidden field
        const serviceInput = document.getElementById('service_name');
        if(serviceInput) {
            serviceInput.value = serviceName.split(' ').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
        }
        
        // Form validation
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = quoteForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if(!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff4757';
                    
                    // Add error message
                    if(!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                        const errorMsg = document.createElement('span');
                        errorMsg.className = 'error-message';
                        errorMsg.style.color = '#ff4757';
                        errorMsg.style.fontSize = '0.9rem';
                        errorMsg.style.marginTop = '5px';
                        errorMsg.style.display = 'block';
                        errorMsg.textContent = 'This field is required';
                        field.parentNode.appendChild(errorMsg);
                    }
                } else {
                    field.style.borderColor = '#e0e0e0';
                    
                    // Remove error message
                    const errorMsg = field.nextElementSibling;
                    if(errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }
                }
            });
            
            // Email validation
            const emailField = document.getElementById('email');
            if(emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.style.borderColor = '#ff4757';
                    
                    if(!emailField.nextElementSibling || !emailField.nextElementSibling.classList.contains('error-message')) {
                        const errorMsg = document.createElement('span');
                        errorMsg.className = 'error-message';
                        errorMsg.style.color = '#ff4757';
                        errorMsg.style.fontSize = '0.9rem';
                        errorMsg.style.marginTop = '5px';
                        errorMsg.style.display = 'block';
                        errorMsg.textContent = 'Please enter a valid email address';
                        emailField.parentNode.appendChild(errorMsg);
                    }
                }
            }
            
            if(isValid) {
                // Show loading state
                const submitBtn = quoteForm.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Submit form via AJAX
                const formData = new FormData(quoteForm);
                
                fetch('../../send_email.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(data => {
                    // Show success message
                    alert('Thank you! Your quote request has been sent successfully. I will contact you within 24 hours.');
                    quoteForm.reset();
                    window.location.href = '../../index.html';
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Sorry, there was an error sending your message. Please try again or email me directly at gichehalawrence@gmail.com');
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
            }
        });
    }
    
    // Initialize reviews slider
    initReviewsSlider();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Reviews Slider
function initReviewsSlider() {
    const reviewsContainer = document.querySelector('.reviews-slider');
    if(!reviewsContainer) return;
    
    // Sample reviews data
    const reviews = [
        {
            text: "Exceptional service! The web development project was completed ahead of schedule and exceeded all expectations. Highly recommended!",
            author: "Sarah Johnson",
            position: "CEO, TechSolutions Inc."
        },
        {
            text: "Professional, reliable, and highly skilled. The mobile app developed has significantly improved our customer engagement. Will definitely work together again!",
            author: "Michael Chen",
            position: "Product Manager, InnovateLabs"
        },
        {
            text: "Outstanding attention to detail and excellent communication throughout the project. The UI/UX design work was exactly what we needed.",
            author: "Emma Davis",
            position: "Marketing Director, CreativeMinds"
        }
    ];
    
    // Populate reviews
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <div class="review-text">
                ${review.text}
            </div>
            <div class="review-author">
                <div class="author-avatar">
                    ${review.author.charAt(0)}
                </div>
                <div class="author-info">
                    <h5>${review.author}</h5>
                    <p>${review.position}</p>
                </div>
            </div>
        `;
        reviewsContainer.appendChild(reviewItem);
    });
}