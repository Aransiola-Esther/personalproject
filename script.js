window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-fixed');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");
function changeSlide() {
    if (slide1.style.display == "block") {
        slide1.style.display = "none";
        slide2.style.display = "block";
        slide3.style.display = "none";
    } else if (slide2.style.display == "block") {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "block";
    } else {
        slide1.style.display = "block";
        slide2.style.display = "none";
        slide3.style.display = "none";
    }
}

setInterval(changeSlide, 3000);