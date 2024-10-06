let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

const bar =document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
};

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation (ensure that both fields are filled)
    if (email && password) {
      // Show the success message popup
      const successPopup = document.getElementById('success-popup');
      successPopup.classList.add('show');
  
      // Hide the popup after 3 seconds
      setTimeout(function() {
        successPopup.classList.remove('show');
      }, 3000);
    } else {
      alert('Please enter both email and password.');
    }
  });



  // JavaScript function to handle form submission and show success message
  function handleSubmit(event) {
    event.preventDefault();
    
    // Get form fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Basic validation to check if passwords match
    if (password === confirmPassword) {
      // Hide the form
      document.getElementById('signup-form').style.display = 'none';

      // Show success message
      document.getElementById('success-message').style.display = 'block';
    } else {
      alert('Passwords do not match. Please try again.');
    }
  }



