const countDownDate = new Date("Mar 20, 2022 00:00:00").getTime();

const x = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();
  const distance = countDownDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown timer
  const countdownTimer = document.getElementById("countdown-timer");
  countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    countdownTimer.innerHTML = "EXPIRED";
  }
}, 1000);

// JavaScript code for the slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Add event 
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
prevButton.addEventListener("click", () => plusSlides(-1));
nextButton.addEventListener("click", () => plusSlides(1));

const dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => currentSlide(i+1));
}