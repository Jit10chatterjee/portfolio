const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle('toggle');
    });


    const links = document.querySelectorAll('.nav-item');
    links.forEach(function (elem) {
        elem.addEventListener('click', smoothScroll)
    });
    function smoothScroll(e) {
        e.preventDefault();
        const link = this.getAttribute("href");
        const offsetTop = document.querySelector(link).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}
const navbar = document.querySelector('.navbar');
const navTop = navbar.offsetTop;
const box = document.querySelector('.about');
const boxPosition = box.getBoundingClientRect().top;
const screenPosition = window.innerHeight;
function stickyNavbar() {
    if (window.scrollY > screenPosition) {
        navbar.classList.add('fixed-nav');
        navbar.style.animation = `stickNavbar 0.5s`;
    } else {
        navbar.style.animation = '';
        navbar.classList.remove('fixed-nav');
    }
}
window.addEventListener('scroll', stickyNavbar);
navSlide();



const sections = document.querySelectorAll('section');
var boxContent = document.querySelectorAll('.content');
function sectionBoxes() {
    const windowHeight = window.innerHeight / 5 * 4;
    sections.forEach((link, index) => {
        const sectionTop = link.getBoundingClientRect().top;
        if (sectionTop < windowHeight) {
            boxContent.forEach((skill, index) => {
                if (skill.style.animation) {
                    skill.style.animation = ''
                } else {
                    skill.style.animation = `navLinkFade 0.5s ease backwards ${index / 7 + 0.3}s`;
                }
            });
            link.classList.add('show');
        } else {
            link.classList.remove('show');
        }
    })
}
window.addEventListener('scroll', sectionBoxes);
sectionBoxes();

var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
var slide = document.querySelectorAll('.certificate-box');
var i = 0;
prevBtn.onclick = function () {
    slide[i].classList.remove('active');
    i--;

    if (i < 0) {
        i = slide.length - 1;
    }
    slide[i].classList.add('active');
};
nextBtn.onclick = function () {
    slide[i].classList.remove("active");
    i++;

    if (i >= slide.length) {
        i = 0;
    }

    slide[i].classList.add("active");
};

const txt = document.querySelector('.name');
const strTxt = txt.textContent;
const splitTxt = strTxt.split('');
const txt1 = document.querySelector('.designation');
const strTxt1 = txt1.textContent;
const splitTxt1 = strTxt1.split('');
txt.textContent = '';
txt1.textContent = '';
for (let i = 0; i < splitTxt.length; i++) {
    txt.innerHTML += '<span>' + splitTxt[i] + '</span>';
}
for (let i = 0; i < splitTxt1.length; i++) {
    txt1.innerHTML += '<span>' + splitTxt1[i] + '</span>';
}
let char = 0;
let char1 = 0;
let timer = setInterval(onTick, 150);
let timer1 = setInterval(onWrite, 90);
function onTick() {
    const span = txt.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitTxt.length) {
        complete();
        return;
    }
}
function onWrite() {
    const span1 = txt1.querySelectorAll('span')[char1];
    span1.classList.add('fade');
    char1++;
    if (char1 === splitTxt1.length) {
        ending();
        return;
    }
}
function complete() {
    clearInterval(timer);
    timer = null;

}
function ending() {
    clearInterval(timer1);
    timer1 = null;
}



function footAnimation() {
    const foot = document.querySelector('.foot');
    const footPosition = foot.getBoundingClientRect().top;
    const screenSize = window.innerHeight;
    const borderColor = document.querySelectorAll('.border-div');
    if (footPosition < screenPosition) {
        borderColor.forEach((block) => {
            if (block.style.animation) {
                block.style.animation = '';
            } else {
                block.style.animation = `borderLine 1s forwards`;
                block.style.display = 'block';
            }
        })
    } else {
        borderColor.forEach((block) => {
            block.style.animation = '';
        })
    }
}
window.addEventListener('scroll', footAnimation);