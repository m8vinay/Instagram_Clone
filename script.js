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
