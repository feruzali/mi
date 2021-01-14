'use strict';

let navOpenBtn = document.getElementById('nav-open'),
    navCloseBtn = document.getElementById('nav-close');

navOpenBtn.addEventListener('click', (event) => {
    event.preventDefault();
    gsap.to('#header-nav', {duration: 1, y: 0});
    document.body.style.overflow = 'hidden';
});
navCloseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    gsap.to('#header-nav', {duration: 1, y: '-100%'});
    document.body.style.overflow = '';
});