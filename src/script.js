// const bookContainer = $('#book-container');
const bookBtn = document.getElementById('book-container');

// var original_top = bookContainer.offset().top
// $(window).scroll(function () {
//     bookContainer.offset({ top: $(this).scrollTop() + original_top })
// })

const scrollHandler = () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 0) {
        bookBtn.style.position = 'fixed'
        bookBtn.style.height = '800px';
        bookBtn.style.right = '0px';
        bookBtn.style.bottom = '0px';
    } else {
        bookBtn.style.position = 'relative'
        bookBtn.style.height = '100px'
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.addEventListener('scroll', scrollHandler)
window.onload = scrollHandler