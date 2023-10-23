import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000,
    offset: 100,
})

const navToggle = document.getElementById('navToggle');

const mobileNav = document.querySelector('.nav__mobile');

navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('nav--visible');
    console.log(mobileNav)
})