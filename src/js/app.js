import * as myFunctions from './modules/functions.js';
import $ from 'jquery';
import 'slick-carousel';
import Inputmask from 'inputmask';
import JustValidate from 'just-validate';
import wow from 'wow.js';

myFunctions.isWebp();

if ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
  console.log('this is a touch device');
  document.body.classList.add('touch');
} else {
  console.log('this is not a touch device');
  document.body.classList.add('no-touch');
}

const menuLinks = document.querySelectorAll('.nav__menu-link');
menuLinks.forEach(function (item) {
  if (window.location.pathname.indexOf(item.getAttribute('href')) > -1) {
    menuLinks.forEach(function (el) {
      el.classList.remove('active');
    });
    item.classList.add('active');
  }
});

$('.gallery__box').slick({
  arrows: false,
  dots: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'progressive',
  touchThreshold: 7,
  responsive: [
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
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
  menuBtn.classList.remove('clicked');
}
function openPopupSent() {
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
closePopUpSent.addEventListener('click', closePopupSent);

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav__box');
const phoneBtn = document.querySelector('.phone');

menuBtn.addEventListener('click', toggleMobileMenu);
phoneBtn.addEventListener('click', function () {
  menu.classList.remove('open');
  body.classList.remove('noscroll');
  menuBtn.classList.remove('clicked');
});

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

let inputsPhone = document.querySelectorAll("input[type='tel']");
Inputmask({ mask: '+380 (99) 999-99-99' }).mask(inputsPhone);

const formPopupValidate = new JustValidate('#registration__form-popup');
formPopupValidate
  .addField('.userNamePopup', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Заполните это поле',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: "Введите корректное имя",
    },
  ])
  .addField('.userPhonePopup', [
    {
      rule: 'required',
      value: true,
      errorMessage: "Номер телефона обязателен",
    },
    {
      rule: 'function',
      validator: function () {
        const phone = document.querySelector('.userPhonePopup').inputmask.unmaskedvalue();
        return phone.length === 9;
      },
      errorMessage: 'Введите корректный номер телефона',
    },
  ])
  .onSuccess((event) => {
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    };
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    event.target.reset();
    closePopup();
    openPopupSent();
  });

const formValidate = new JustValidate('#registration__form');
formValidate
  .addField('.userName', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Заполните это поле',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: "Введите корректное имя",
    },
  ])
  .addField('.userPhone', [
    {
      rule: 'required',
      value: true,
      errorMessage: "Номер телефона обязателен",
    },
    {
      rule: 'function',
      validator: function () {
        const phone = document.querySelector('.userPhone').inputmask.unmaskedvalue();
        return phone.length === 9;
      },
      errorMessage: 'Введите корректный номер телефона',
    },
  ])
  .onSuccess((event) => {
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    };
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    event.target.reset();
    closePopup();
    openPopupSent();
  });

wow = new wow({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 150,
  mobile: false,
  live: true,
});
wow.init();
