// script.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleNavButton = document.getElementById('toggleNav');
    const closeNavButton = document.getElementById('closeNav');
    const mainNav = document.getElementById('mainNav');
    const mainContent = document.querySelector('main');

    toggleNavButton.addEventListener('click', function () {
        openNav();
    });

    closeNavButton.addEventListener('click', function () {
        closeNav();
    });

    mainContent.addEventListener('click', function (event) {
        if (mainNav.style.width === '250px' && !mainNav.contains(event.target)) {
            closeNav();
        }
    });

    function openNav() {
        mainNav.style.width = '250px';
        mainContent.style.marginRight = '250px';
        closeNavButton.style.display = 'block';
    }

    function closeNav() {
        mainNav.style.width = '0';
        mainContent.style.marginRight = '0';
        closeNavButton.style.display = 'none';
    }
	let slideIndex = 0;
     showSlides();

    function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
    // Function to update the date 
    function updateDate() {
	var currentDate = new Date();
	var dateString = currentDate.toLocaleDateString(undefined, {year: 'numeric', month: 'long',day: 'numeric'});
	var updateDateElement = document.getElementById('update-date');
	updateDateElement.textContent = 'Created on: ' + dateString;
}
     // Call the function initially to set the initial date
    updateDate();
});

// Get the arrow container and child buttons container
var arrowContainer = document.getElementById('arrow-container');
var childButtons = document.getElementById('child-buttons');

// Toggle class on click to show/hide the child buttons
arrowContainer.addEventListener('click', function() {
  arrowContainer.classList.toggle('active');
});