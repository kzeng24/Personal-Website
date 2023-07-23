/*MENU*/

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
sideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
  } else {
    sideNav.style.right = "-250px";
  }
};
sideNav.onclick = function () {
  sideNav.style.right = "-250px";
};
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

/*PROJECT POPUPS*/

/*Mastermind*/
function displayMaster() {
  document.querySelector(".bg-modal-master").style.display = "flex";
}

function closeMaster() {
  document.querySelector(".bg-modal-master").style.display = "none";
}

/*FloodIt*/
function displayFlood() {
  document.querySelector(".bg-modal-flood").style.display = "flex";
}

function closeFlood() {
  document.querySelector(".bg-modal-flood").style.display = "none";
}

/*Image Processing*/
function displayImage() {
  document.querySelector(".bg-modal-image").style.display = "flex";
}

function closeImage() {
  document.querySelector(".bg-modal-image").style.display = "none";
}

/*Card*/
function displayCard() {
  document.querySelector(".bg-modal-card").style.display = "flex";
}

function closeCard() {
  document.querySelector(".bg-modal-card").style.display = "none";
}

/* Predator-Prey */
function displayBugs() {
  document.querySelector(".bg-modal-bug").style.display = "flex";
}

function closeBugs() {
  document.querySelector(".bg-modal-bug").style.display = "none";
}

/* Messaging App */
function displayChat() {
  document.querySelector(".bg-modal-chat").style.display = "flex";
}

function closeChat() {
  document.querySelector(".bg-modal-chat").style.display = "none";
}

/* Pet App */
function displayPet() {
  document.querySelector(".bg-modal-pet").style.display = "flex";
}

function closePet() {
  document.querySelector(".bg-modal-pet").style.display = "none";
}

/* BGP Router */
function displayRouter() {
  document.querySelector(".bg-modal-router").style.display = "flex";
}

function closeRouter() {
  document.querySelector(".bg-modal-router").style.display = "none";
}

/* My Atlas */
function displayMyAtlas() {
  document.querySelector(".bg-modal-myAtlas").style.display = "flex";
}

function closeMyAtlas() {
  document.querySelector(".bg-modal-myAtlas").style.display = "none";
}

/* CineScope */
function displayMovie() {
  document.querySelector(".bg-modal-movie").style.display = "flex";
}

function closeMovie() {
  document.querySelector(".bg-modal-movie").style.display = "none";
}

/* HackBeanpot */
function displayHBP() {
  document.querySelector(".bg-modal-HBP").style.display = "flex";
}

function closeHBP() {
  document.querySelector(".bg-modal-HBP").style.display = "none";
}

/*GALLERY*/

var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

showSlides();

function currentSlide(n) {
  slideIndex = n;
}

function showSlides() {
  var i;
  var container = document.getElementsByClassName("slideshow-container");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;
counterContainer.innerHTML = visitCount;
