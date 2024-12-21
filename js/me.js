// Making ScrollReveal...
// html code..
<script src="https://unpkg.com/scrollreveal"></script>
// Js code..
const scrollRevealOPtion = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal('.header-image img', {
    ...scrollRevealOPtion,
    origin: "right ",
    interval: 500,

});
ScrollReveal().reveal('.header-content h1', {
    ...scrollRevealOPtion,
    delay: 1500,
});
ScrollReveal().reveal('.header-content .section-description', {
    ...scrollRevealOPtion,
    delay: 2000,
});
ScrollReveal().reveal('.header-content form', {
    ...scrollRevealOPtion,
    delay: 2500,
});

// ###############################################################################################################


// Making Swiper...
// Html code 
<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>


// Js code
const swiper = new Swiper('.swiper', {
    // Optional parameters
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
    });

//###############################################################################################################
