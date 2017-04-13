$(document).ready(function(){
  $(window).scroll(function() {
      var scrollPos = $(window).scrollTop(),
          navbar = $('.nav-wrapper-home');

      if (scrollPos > 10) {

        navbar.addClass('change-color');
      } else {
        navbar.removeClass('change-color');
      }
    });
});

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(100);
});
