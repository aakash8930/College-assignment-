// change navbar on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// Show/hide faq questions 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className =  'fa-solid fa-minus';   
        }else{
            icon.className = 'fa-solid fa-plus';
        }
    })
});


//show/hide navbar

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close navbar

const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


// testimonials slider
let currentTestimonial = 1;
const intervalTime = 3000; // Set the time interval in milliseconds (e.g., 5000 for 5 seconds)

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    if (index < 1) {
        currentTestimonial = testimonials.length;
    } else if (index > testimonials.length) {
        currentTestimonial = 1;
    } else {
        currentTestimonial = index;
    }

    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    testimonials[currentTestimonial - 1].style.display = 'block';
}

function prevTestimonial() {
    showTestimonial(currentTestimonial - 1);
}

function nextTestimonial() {
    showTestimonial(currentTestimonial + 1);
}

function autoSlide() {
    nextTestimonial();
}

// Show the first testimonial on page load
showTestimonial(currentTestimonial);

// Set up the interval for automatic sliding
setInterval(autoSlide, intervalTime);


