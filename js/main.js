// Main JavaScript for Myreze-Labs Depth Estimation Workshop

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for interactive elements
    addEventListeners();
    
    // Initialize any components that need it
    initializeComponents();
});

// Add event listeners to interactive elements
function addEventListeners() {
    // Landing page enter button animation
    const enterButton = document.querySelector('.enter-button');
    if (enterButton) {
        enterButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        enterButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Navigation card hover effects
    const navCards = document.querySelectorAll('.card');
    navCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Resource card hover effects
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize components
function initializeComponents() {
    // Fix FontAwesome presentation icon in the hub page
    const presentationIcons = document.querySelectorAll('.fas.fa-presentation');
    if (presentationIcons.length > 0) {
        presentationIcons.forEach(icon => {
            icon.classList.remove('fa-presentation');
            icon.classList.add('fa-chalkboard-teacher');
        });
    }
    
    // Add Twitter icon
    const twitterIcons = document.querySelectorAll('.fab.fa-twitter');
    if (twitterIcons.length === 0) {
        const twitterHeading = document.querySelector('.twitter-feed h2');
        if (twitterHeading) {
            const twitterIcon = document.createElement('i');
            twitterIcon.classList.add('fab', 'fa-twitter');
            twitterHeading.prepend(twitterIcon);
            twitterHeading.insertBefore(document.createTextNode(' '), twitterHeading.childNodes[1]);
        }
    }
}

// Helper functions
function animateElement(element, animation, duration) {
    if (!element) return;
    
    element.style.animation = `${animation} ${duration}s`;
    
    element.addEventListener('animationend', function() {
        element.style.animation = '';
    });
}

// Example: Apply a pulsing animation to titles
function pulseTitles() {
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
        animateElement(title, 'pulse', 2);
    });
}

// Show a notification
function showNotification(message, type = 'info', duration = 3000) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = message;
    
    // Add to the DOM
    document.body.appendChild(notification);
    
    // Show with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide after duration
    setTimeout(() => {
        notification.classList.remove('show');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
}

// Utility function to create loader
function createLoader(container) {
    if (!container) return;
    
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<div class="spinner"></div>';
    
    container.appendChild(loader);
    
    return loader;
}

// Utility function to remove loader
function removeLoader(loader) {
    if (!loader) return;
    
    loader.parentNode.removeChild(loader);
} 