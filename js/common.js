$(document).ready(function () {

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
 
 
  var s = document.createElement('style');
  document.head.appendChild(s);
  
  var inputDiv = document.querySelector('#inputDiv');
  var w = parseInt(window.getComputedStyle(inputDiv, null).getPropertyValue("width"));
  /* EL INPUT */
  var elInput = document.querySelector("input[type='range']");
  elInput.style.width = w +"px";
  var inputMin = elInput.getAttribute('min');
  var inputMax = elInput.getAttribute('max');
  var k = w/(inputMax - inputMin);
  
  /* LA ETIQUETA */
  var etiqueta = document.querySelector('#etiqueta');
  var ew = parseInt(window.getComputedStyle(etiqueta, null).getPropertyValue("width"));
  
  
  /* el valor de la etiqueta (el tooltip) */
  etiqueta.innerHTML = elInput.value;
  /* calcula la posición inicial de la etiqueta (el tooltip) */
  etiqueta.style.left =  ((elInput.value * k) - (ew/2))+"px";
  /* establece el estilo inicial del TRACK */
  s.textContent ="input[type=range]::-webkit-slider-runnable-track{ background-image:-webkit-linear-gradient(left, #4d4dff "+elInput.value+"%,#d3deff "+elInput.value+"%)}"
  s.textContent +="input[type=range]::-moz-range-track{ background-image:-moz-linear-gradient(left, #4d4dff "+elInput.value+"%,#d3deff "+elInput.value+"%)}"
  
  
  
  elInput.addEventListener('input',function(){
    
  /* cambia el valor de la etiqueta (el tooltip) */
  etiqueta.innerHTML =elInput.value;
  /* cambia la posición de la etiqueta (el tooltip) */
  etiqueta.style.left =  ((elInput.value * k) - (ew/2))+"px";
  /* cambia el estilo del TRACK */
  s.textContent ="input[type=range]::-webkit-slider-runnable-track{ background-image:-webkit-linear-gradient(left, #4d4dff "+elInput.value+"%,#d3deff "+elInput.value+"%)}"
  s.textContent +="input[type=range]::-moz-range-track{ background-image:-moz-linear-gradient(left, #4d4dff "+elInput.value+"%,#d3deff "+elInput.value+"%)}"
  
  }, false);


});