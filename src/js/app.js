import * as myFunctions from './modules/functions.js';
import $ from 'jquery';
import 'slick-carousel';
import Inputmask from 'inputmask';
import JustValidate from 'just-validate';

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
// const sendFormBtns = document.querySelectorAll('.registration__form-btn');
const popUpSent = document.querySelector('.modal-successful');
const popUpBodySent = document.querySelector('.modal-successful__body');
const popUpWrapSent = document.querySelector('.modal-successful__wrap');
const popUpSentBtn = document.querySelector('.modal-successful__btn');
const popUpSentClose = document.querySelector('.modal-successful__close');
const body = document.body;

openPopUpbtns.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    popUpBody.classList.add('active');
    body.classList.add('noscroll');
    menu.classList.remove('open');
    body.classList.remove('noscroll');
    menuBtn.classList.remove('clicked');
  });
});

const mobileMenuLinks = document.querySelectorAll('.nav__menu-link');
mobileMenuLinks.forEach(function (item) {
  item.addEventListener('click', toggleMobileMenu);
});

popUpWrap.addEventListener('click', function () {
  popUp.classList.remove('active');
  popUpBody.classList.remove('active');
  body.classList.remove('noscroll');
});
popUpWrapSent.addEventListener('click', function () {
  popUpSent.classList.remove('active');
  popUpBodySent.classList.remove('active');
  body.classList.remove('noscroll');
});
popUpBody.addEventListener('click', function (e) {
  e.stopPropagation();
});
popUpBodySent.addEventListener('click', function (e) {
  e.stopPropagation();
});


popUpSentBtn.addEventListener('click', function () {
  popUpSent.classList.remove('active');
  popUpBodySent.classList.remove('active');
  body.classList.remove('noscroll');
});

closePopUp.addEventListener('click', function () {
  popUpBody.classList.remove('active');
  popUp.classList.remove('active');
  body.classList.remove('noscroll');
});
popUpSentClose.addEventListener('click', function () {
  popUpSent.classList.remove('active');
  popUpBodySent.classList.remove('active');
  body.classList.remove('noscroll');
});


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav__box');
const phoneBtn = document.querySelector('.phone');
const logo = document.querySelector('.logo');

function toggleMobileMenu() {
  menu.classList.toggle('open');
  body.classList.toggle('noscroll');
  menuBtn.classList.toggle('clicked');
}
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

const validation = new JustValidate('.registration__form-bottom');

validation
  .addField('#userName', [
    {
      rule: 'required',
      errorMessage: 'Заповніть це поле',
    },
  ])
  .addField('#userPhone', [
    {
      rule: 'required',
      errorMessage: 'Заповніть це поле',
    },
  ]);

// function validateForms (selector, rules) {
//   new JustValidate (selector, {
//     rules: rules,
//     submitHandler: function(form) {
//       console.log(form)
//     }
//   })
// }
// validateForms('.registration__form-bottom', {userName:{required:true}, userPhone:{required:true}});