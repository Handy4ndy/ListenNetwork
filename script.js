document.addEventListener("DOMContentLoaded", function () {
    const slideshowImages = document.querySelectorAll(".events-slideshow img");
    let currentImageIndex = 0;
  
    function showNextImage() {
      slideshowImages[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
      slideshowImages[currentImageIndex].classList.add("active");
    }
  
    // Automatically show next image every 3 seconds
    setInterval(showNextImage, 3000);
  });