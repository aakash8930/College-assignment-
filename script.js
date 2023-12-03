const nxtBtn = document.querySelector(".next-btn");
const prvBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
let slideNumber= 0;


// slider next button
nxtBtn.onclick = () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides-1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}


// slider Prev button
prvBtn.onclick = () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;

    if(slideNumber < 0 ){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}




// Add this in your script.js file
const menuIcon = document.querySelector(".menu-icon");
const navbarList = document.querySelector(".navbar ul");

menuIcon.addEventListener("click", () => {
    navbarList.classList.toggle("active");
});
body.addEventListener("click", (event) => {
    if (!navbarList.contains(event.target) && !menuIcon.contains(event.target)) {
        navbarList.classList.remove("active");
    }
});