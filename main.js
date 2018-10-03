'use strict';

/*$(document).ready(main);
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
});*/

$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            const target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    const scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.navigation a.active').removeClass('active');
                    $('.navigation a').eq(i).addClass('active');
            }
    });
}).scroll();