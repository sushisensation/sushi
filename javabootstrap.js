// Slideshow JavaScript with Auto-Sliding
let slideIndex = 1;
showSlides(slideIndex);

// Function to show next/previous slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main slideshow function with auto-slide
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Loop back to the first slide after the last one
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides and remove 'active' class from dots
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and highlight the dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto-slide feature: Slide changes every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000); // Change every 5 seconds

// Navigation JavaScript for Overlay Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Mobile Navigation Toggle
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
