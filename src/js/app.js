import * as myFunctions from './modules/functions.js';
import $ from 'jquery';
import 'slick-carousel';
import Inputmask from 'inputmask';
import 'jquery-validation';

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
const popUpSent = document.querySelector('.modal-successful');
const popUpBodySent = document.querySelector('.modal-successful__body');
const popUpWrapSent = document.querySelector('.modal-successful__wrap');
const popUpSentBtn = document.querySelector('.modal-successful__btn');
const closePopUpSent = document.querySelector('.modal-successful__close');
const body = document.body;

function openPopup() {
  popUp.classList.add('active');
  popUpBody.classList.add('active');
  body.classList.add('noscroll');
  menu.classList.remove('open');
  body.classList.remove('noscroll');
  menuBtn.classList.remove('clicked');
}
function openPopupSent () {
  popUpSent.classList.add('active');
  popUpBodySent.classList.add('active');
  body.classList.add('noscroll');
}
function closePopup() {
  popUp.classList.remove('active');
  popUpBody.classList.remove('active');
  body.classList.remove('noscroll');
}
function closePopupSent() {
  popUpSent.classList.remove('active');
  popUpBodySent.classList.remove('active');
  body.classList.remove('noscroll');
}
function toggleMobileMenu() {
  menu.classList.toggle('open');
  body.classList.toggle('noscroll');
  menuBtn.classList.toggle('clicked');
}

openPopUpbtns.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    openPopup();
  });
});

const mobileMenuLinks = document.querySelectorAll('.nav__menu-link');
mobileMenuLinks.forEach(function (item) {
  item.addEventListener('click', toggleMobileMenu);
});

popUpWrap.addEventListener('click', closePopup);
popUpWrapSent.addEventListener('click', closePopupSent);
popUpBody.addEventListener('click', function (e) {
  e.stopPropagation();
});
popUpBodySent.addEventListener('click', function (e) {
  e.stopPropagation();
});
popUpSentBtn.addEventListener('click', closePopupSent);

closePopUp.addEventListener('click', closePopup);
closePopUpSent.addEventListener('click',closePopupSent);

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav__box');
const phoneBtn = document.querySelector('.phone');
const logo = document.querySelector('.logo');

menuBtn.addEventListener('click', toggleMobileMenu);
phoneBtn.addEventListener('click', toggleMobileMenu);
logo.addEventListener('click', toggleMobileMenu);

const upBtn = document.querySelector('.up-btn');
window.addEventListener('scroll', function () {
  upBtn.classList.toggle('active', window.scrollY > 500);
});
upBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

let inputs = document.querySelectorAll("input[type='tel']");
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

$('#registration__form-popup').validate({
  rules: {
    userName: {
      required: true,
    },
    userPhone: {
      required: true,
    },
  },
  messages: {
    userName: {
      required: 'Заповніть це поле',
    },
    userPhone: {
      required: 'Заповніть це поле',
    },
  },
  submitHandler: function () {
    closePopup();
    openPopupSent();
  },
});

$('#registration__form').validate({
  rules: {
    userName: {
      required: true,
    },
    userPhone: {
      required: true,
    },
  },
  messages: {
    userName: {
      required: 'Заповніть це поле',
    },
    userPhone: {
      required: 'Заповніть це поле',
    },
  },
  submitHandler: function () {
    closePopup();
    openPopupSent();
  },
});
