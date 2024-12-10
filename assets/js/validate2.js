document.addEventListener('DOMContentLoaded', () => { //
  const form = document.querySelector('.php-email-form'); // Select the form
  const loadingMessage = document.querySelector('.loading');
  const errorMessage = document.querySelector('.error-message');
  const sentMessage = document.querySelector('.sent-message');

 




    // take inputs value
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !subject || !message) { //nothing missing
      errorMessage.textContent = 'All fields are required.';
      errorMessage.style.display = 'block';
      return;
    }

   

    // Show loading message
    loadingMessage.style.display = 'block'; //loading in background

    // delete content
    setTimeout(() => {
      
      form.reset(); // Clear the form after submission
    }, 2000); // 
  });

  
});