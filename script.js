
// ===============================
// ABDULFATTY AUTOS - JAVASCRIPT
// ===============================


// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// CLOSE MENU WHEN A LINK IS CLICKED
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// SCROLL REVEAL ANIMATIONS
const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}


// AUTOMATIC COPYRIGHT YEAR
const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// CLOSE MOBILE MENU WHEN SCREEN IS RESIZED
window.addEventListener("resize", function () {

    if (window.innerWidth > 700) {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


// WEBSITE LOADED
console.log("Abdulfatty Autos website loaded successfully!");
