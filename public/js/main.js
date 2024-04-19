const toggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');
const siteHeader = document.querySelector('.site-header');

toggle.addEventListener('click', function() {
  siteHeader.classList.toggle('menu-open');
  const thisToggle = this;
  menu.classList.toggle('is-active');
  const isMenuActive = menu.classList.contains('is-active');
  thisToggle.setAttribute('aria-expanded', isMenuActive ? 'true' : 'false');
});

// Slide show
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
