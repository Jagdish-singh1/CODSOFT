// Get the form and the success message elements
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission (which causes the redirect)
    event.preventDefault();

    // Hide the form
    form.style.display = 'none';

    // Show the success message
    successMessage.style.display = 'block';

});