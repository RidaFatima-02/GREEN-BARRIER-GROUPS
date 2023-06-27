const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');

let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex > slides.length - 3) {
    currentIndex = 0;
  }
  updateSlider();
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 3;
  }
  updateSlider();
}

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', previousSlide);