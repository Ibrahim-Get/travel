const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "fa-solid fa-x": "fa-solid fa-bars")
})

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

ScrollReveal().reveal('.choose-image img', {
    ...scrollRevealOPtion,
    origin: "right ",
});
ScrollReveal().reveal('.choose-content .section-subheader', {
    ...scrollRevealOPtion,
    delay: 500,
}); 
ScrollReveal().reveal('.choose-content .section-header', {
    ...scrollRevealOPtion,
    delay: 1000,
}); 
ScrollReveal().reveal('.choose-list li', {
    ...scrollRevealOPtion,
    delay: 1500,
    interval: 500,
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
    });

    ScrollReveal().reveal('.explore-image img', {
        ...scrollRevealOPtion,
        origin: "right ",
    });
    ScrollReveal().reveal('.explore-content .section-subheader', {
        ...scrollRevealOPtion,
        delay: 500,
    }); 
    ScrollReveal().reveal('.explore-content .section-header', {
        ...scrollRevealOPtion,
        delay: 1000,
    }); 
    ScrollReveal().reveal('.explore-content .section-description', {
        ...scrollRevealOPtion,
        delay: 1500,
    }); 
    ScrollReveal().reveal('.explore-content .explore-btn', {
        ...scrollRevealOPtion,
        delay: 2000,
    }); 
    ScrollReveal().reveal('.explore-gird div', {
        duration:1000,
        delay: 2500,
        interval: 500,
    });

    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const clientCards = Array.from(document.querySelectorAll(".client-card"))
    next.addEventListener("click", (e) => {
        for (let i = 0; i < clientCards.length; i++) {
            if(clientCards[i].classList.contains("active")) {
                const nextIndex = (i + 1) % clientCards.length;
                clientCards[i].classList.remove("active");
                clientCards[nextIndex].classList.add("active");
                break;
            }
            
        }
    })
    prev.addEventListener("click", (e) => {
        for (let i = 0; i < clientCards.length; i++) {
            if(clientCards[i].classList.contains("active")) {
                const prevIndex = (i ? i : clientCards.length) - 1;
                clientCards[i].classList.remove("active");
                clientCards[prevIndex].classList.add("active");
                break;
            }
            
        }
    })

    ScrollReveal().reveal('.subscribe-container .section-header', {
        ...scrollRevealOPtion,
    });
    ScrollReveal().reveal('.subscribe-container .section-description', {
        ...scrollRevealOPtion,
        delay: 500,
    });
    ScrollReveal().reveal('.subscribe-container form', {
        ...scrollRevealOPtion,
        delay: 1000,
    });