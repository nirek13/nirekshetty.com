// Add this to a new file: assets/JS/project-modals.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modals
    var projectModals = document.querySelectorAll('.modal');
    projectModals.forEach(function(modal) {
      new bootstrap.Modal(modal);
    });
    
    // Add event listeners to all portfolio items
    var portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        // The data-bs-target attribute handles which modal to show
      });
    });
    
    // Optional: Add keyboard accessibility
    portfolioItems.forEach(function(item) {
      item.setAttribute('tabindex', '0');
      item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  });
  
  // Add this CSS to your styles.css file
  
  