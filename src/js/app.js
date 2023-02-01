import * as myFunctions from './modules/functions.js';
import $ from 'jquery';
import 'slick-carousel';
myFunctions.isWebp();

$('.gallery__box').slick({
  arrows: false,
  dots: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: 'unslick',
    },
  ],
});

const openPopUpbtns = document.querySelectorAll('.button');
const closePopUp = document.querySelector('.close');
const popUp = document.querySelector('.modal');
const popUpWrap = document.querySelector('.modal__wrap');
const popUpBody = document.querySelector('.modal__body');
const sendFormbtns = document.querySelectorAll('.registration__form-btn');
const popUpSucs = document.querySelector('.modal-successful');
const popUpBodySucs = document.querySelector('.modal-successful__body');
const popUpWrapSucs = document.querySelector('.modal-successful__wrap');
const popUpSucsBtn = document.querySelector('.modal-successful__btn');
const popUpSucsClose = document.querySelector('.modal-successful__close');
const body = document.body;

openPopUpbtns.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    popUpBody.classList.add('active');
    body.classList.add('noscroll');
  });
});

const mobileMenuLinks = document.querySelectorAll('.nav__menu-link');
mobileMenuLinks.forEach(function (item) {
  item.addEventListener('click', MobileMenu);
});

popUpWrap.addEventListener('click', function () {
  popUp.classList.remove('active');
  popUpBody.classList.remove('active');
  body.classList.remove('noscroll');
});
popUpWrapSucs.addEventListener('click', function () {
  popUpSucs.classList.remove('active');
  popUpBodySucs.classList.remove('active');
  body.classList.remove('noscroll');
});
popUpBody.addEventListener('click', function (e) {
  e.stopPropagation();
});
sendFormbtns.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.remove('active');
    popUpBody.classList.remove('active');
    popUpSucs.classList.add('active');
    popUpBodySucs.classList.add('active');
    body.classList.add('noscroll');
  });
});
popUpSucsBtn.addEventListener('click', function () {
  popUpSucs.classList.remove('active');
  popUpBodySucs.classList.remove('active');
  body.classList.remove('noscroll');
});
closePopUp.addEventListener('click', function () {
  popUpBody.classList.remove('active');
  popUp.classList.remove('active');
  body.classList.remove('noscroll');
});
popUpSucsClose.addEventListener('click', function () {
  popUpSucs.classList.remove('active');
  popUpBodySucs.classList.remove('active');
  body.classList.remove('noscroll');
});
popUpBodySucs.addEventListener('click', function (e) {
  e.stopPropagation();
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav__box');
const phoneBtn = document.querySelector('.phone');
const logo = document.querySelector('.logo');
const header = document.querySelector('.header');

function MobileMenu() {
  menu.classList.toggle('open');
  body.classList.toggle('noscroll');
  menuBtn.classList.toggle('clicked');
  header.classList.toggle('open');
}

menuBtn.addEventListener('click', MobileMenu);
phoneBtn.addEventListener('click', MobileMenu);
logo.addEventListener('click', MobileMenu);

const anchors = document.querySelectorAll('.scroll-to');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = document.querySelector('.nav').offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
}
