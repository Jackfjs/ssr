let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slider img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = 'translateX(-100%)';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.transform = 'translateX(0)';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}