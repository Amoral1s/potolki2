$(document).ready(function () {

  if ($(window).width() < 992) {
    $(window).bind('scroll', function() { 
      var top = $(document).scrollTop();
      if (top > 70) {
        $('.burger').addClass('move-burger');
       }
      else {
        $('.burger').removeClass('move-burger');
       }
    });
  }

  if ($(window).width() < 992) {
    $('.burger').on('click',() => {
      $('.header-top-wrap-center ul.menu').slideToggle(600);
      $('.burger').toggleClass('burger-active');
    });
  }
  
  jQuery('.header-top-wrap-center ul li:has(ul)').addClass('has-children');

  jQuery('li.has-children').click(function() {
    jQuery(this).children('ul').slideDown(500);
  });

  jQuery('li.has-children').mouseenter(function() {
    jQuery(this).children('ul').slideDown(500);
  });
  
  jQuery('.has-children').mouseleave(function() {
    jQuery(this).children('ul').slideUp(500);
  });
  
  if ($(window).width() > 992) {
    $('.portfolio-wrap').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true
    });
  } else {
    $('.portfolio-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true
    });
  }
 
 



  const calc = () => {
    const square = document.querySelector('.range-input'),
          squareVal = document.querySelector('.range-value'),
          ugol = document.querySelector('.calc-ugol'),
          lightBig = document.querySelector('.calc-big-light'),
          light = document.querySelector('.calc-light'),
          trub = document.querySelector('.calc-trub'),
          result = document.querySelector('.result'),
          baseLightCost = 600,
          baseUgol = 900,
          baseSquare = 700;

    let calculating = 0;

    const calcState = () => {
      calculating = (+square.value * +baseSquare) + 
      ((+ugol.value - 4) * +baseUgol) + +lightBig.value + 
      (+light.value * +baseLightCost) + +trub.value;
    };

    square.addEventListener('change', () => {
      calcState();
      squareVal.textContent = +square.value;
      result.textContent = +calculating;
    });
    ugol.addEventListener('change', () => {
      if (ugol.value === '' || ugol.value === 0) {
        alert('Углов не может быть 0! Расчитайте свой потолок правильно!');
        result.textContent = 0;
        return;
      }
      calcState();
      result.textContent = +calculating;
    });
    lightBig.addEventListener('change', () => {
      calcState();
      result.textContent = +calculating;
    });
    light.addEventListener('change', () => {
      calcState();
      result.textContent = +calculating;
    });
    trub.addEventListener('change', () => {
      calcState();
      result.textContent = +calculating;
    });

  };

  calc();
  
  $('.call-popup').on('click', () => {
    $('.overlay').addClass('overlay-active');
    $('.popup').addClass('popup-active');
  });
  $('.close').on('click', () => {
    $('.overlay').removeClass('overlay-active');
    $('.popup').removeClass('popup-active');
  });
  $('.overlay').on('click', () => {
    $('.overlay').removeClass('overlay-active');
    $('.popup').removeClass('popup-active');
  });
});