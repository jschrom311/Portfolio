'use strict';

$(document).ready(main);
function main() {
  $('#headerimg').hide();
  $('#headerimg').fadeIn(1000);
}

$('#head-click').click(function() {
  $('html, body').animate({
    scrollTop: $('#head-container').offset().top
  }, 800);
});

$('#contact-click').click(function() {
  $('html, body').animate({
    scrollTop: $('#project-container').offset().top
  }, 800);
});

$('#about-click').click(function() {
  $('html, body').animate({
    scrollTop: $('#contact-container').offset().top
  }, 800);
});


var button = document.getElementById('hamburger-menu'),
    span = button.getElementsByTagName('span')[0];

button.onClick =  function() {
  span.classList.toggle('hamburger-menu-button-close');
};

$('#hamburger-menu').on('click', toggleOnClass);

function toggleOnClass(event) {
  var toggleElementId = '#' + $(this).data('toggle'),
  element = $(toggleElementId);

  element.toggleClass('on');

}

// close hamburger menu after click a
$( '.menu li a' ).on("click", function(){
  $('#hamburger-menu').click();
});