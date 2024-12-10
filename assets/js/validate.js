document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.php-email-form'); // Select the html elements
  const loadingMessage = document.querySelector('.loading');
  const errorMessage = document.querySelector('.error-message');
  const sentMessage = document.querySelector('.sent-message');

 

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Clear previous messages
    errorMessage.style.display = 'none';
    sentMessage.style.display = 'none';

    // Validate inputs
    const name = form.querySelector('#name').value.trim(); // Select the form data
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !subject || !message) { // check if all are here
      errorMessage.textContent = 'All fields are required.';
      errorMessage.style.display = 'block';
      return;
    }

     // Basic email validation
     if (!email.includes('@') || !email.includes('.')) {
      errorMessage.innerHTML += 'Email is not valid!';
      errorMessage.style.display = 'block';
      return;
    }

    // Show loading message
    loadingMessage.style.display = 'block';

    // Simulate form submission
    setTimeout(() => {
      loadingMessage.style.display = 'none';
      sentMessage.style.display = 'block';
      form.reset(); // Clear the form
    }, 2000); // Simulated delay for form processing (loading 2000ms)
  });


});

