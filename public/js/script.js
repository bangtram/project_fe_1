window.onscroll = function () {Sticky()};
const nav = document.querySelector('nav');
function Sticky() {
    if (window.scrollY > 50) {
        nav.classList.add('sticky-scroll');
    } else {
        nav.classList.remove('sticky-scroll');   
    }
}

const dropdown = document.querySelectorAll('.dropdown');
const dropdown_menu = document.querySelectorAll('.dropdown-menu');
for(let i = 0; i < dropdown.length; i++){
    dropdown[i].addEventListener('mouseenter', () => {
        dropdown[i].classList.add('show');
        dropdown_menu[i].classList.add('show');
    })
    dropdown[i].addEventListener('mouseleave', () => {
        dropdown[i].classList.remove('show');
        dropdown_menu[i].classList.remove('show');
    })

}

