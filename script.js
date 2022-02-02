/*MENU*/

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
sideNav.style.right = "-250px";

menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
    } else {
        sideNav.style.right = "-250px";
    }
}
sideNav.onclick = function() {
    sideNav.style.right = "-250px";
}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

/*PROJECT POPUPS*/

/*Mastermind*/
function displayMaster() {
    document.querySelector('.bg-modal-master').style.display = 'flex';
}

function closeMaster() {
    document.querySelector('.bg-modal-master').style.display = 'none';
}

/*FloodIt*/
function displayFlood() {
    document.querySelector('.bg-modal-flood').style.display = 'flex';
}

function closeFlood() {
    document.querySelector('.bg-modal-flood').style.display = 'none';
}

/*Image Processing*/
function displayImage() {
    document.querySelector('.bg-modal-image').style.display = 'flex';
}

function closeImage() {
    document.querySelector('.bg-modal-image').style.display = 'none';
}

/*Card*/
function displayCard() {
    document.querySelector('.bg-modal-card').style.display = 'flex';
}

function closeCard() {
    document.querySelector('.bg-modal-card').style.display = 'none';
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
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}