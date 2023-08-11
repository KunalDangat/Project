const ham = document.getElementById('hambar');
const xmark = document.getElementById('cross');
const navbar = document.getElementById('navbar');

if (ham) {
    ham.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if (xmark) {
    xmark.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// Mobile

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}