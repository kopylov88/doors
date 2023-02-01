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
      settings: 'unslick',
    },
  ],
});

const openPopUpbtns = document.querySelectorAll('.button');
const closePopUp = document.querySelector('.close');
const popUp = document.querySelector('.modal');
const popUpWrap = document.querySelector('.modal__wrap');
const popUpBody = document.querySelector('.modal__body');
const sendForm = document.querySelector('.registration__form-btn');
const popUpSucs = document.querySelector('.modal-successful');
const popUpBodySucs = document.querySelector('.modal-successful__body');
const popUpWrapSucs = document.querySelector('.modal-successful__wrap');
const popUpSucsBtn = document.querySelector('.modal-successful__btn');
const popUpSucsClose = document.querySelector('.modal-successful__close');
const body = document.querySelector('body');

openPopUpbtns.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    popUpBody.classList.add('active');
    body.classList.add('noscroll');
  });
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
sendForm.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.remove('active');
  popUpBody.classList.remove('active');
  popUpSucs.classList.add('active');
  popUpBodySucs.classList.add('active');
  body.classList.add('noscroll');
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
const header = document.querySelector('.header');
const phoneBtn = document.querySelector('.phone');
const logo = document.querySelector('.logo');

function removeMobileMenu() {
  menu.classList.remove('open');
  header.classList.remove('open');
  body.classList.remove('noscroll');
  menuBtn.classList.remove('clicked');
}

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('clicked');
  menu.classList.toggle('open');
  header.classList.toggle('open');
  body.classList.toggle('noscroll');
});
phoneBtn.addEventListener('click', removeMobileMenu);
logo.addEventListener('click', removeMobileMenu);
