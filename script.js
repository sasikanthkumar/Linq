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


$(document).ready(function(){
  // hide our element on page load
  $('.whatIsLinqContainer .whatIsLinqHeading').css('opacity', 0);
  $('#linqAdvantagesId').css('opacity', 0);
  $('.whatIsLinqContainer .whatIsLinqCard').css('opacity', 0);

  $('.whatIsLinqContainer .whatIsLinqHeading').waypoint(function() {
      $('.whatIsLinqContainer .whatIsLinqHeading').addClass('fadeInLeft');
  }, { offset: '100%' });

  $('.whatIsLinqContainer .whatIsLinqText').waypoint(function() {
      $('.whatIsLinqContainer .whatIsLinqText').addClass('zoomIn');
  }, { offset: '100%' });

  $('#linqAdvantagesId').waypoint(function() {
      $('#linqAdvantagesId').addClass('fadeInRight');
  }, { offset: '100%' });

  $('.whatIsLinqContainer .whatIsLinqCard').waypoint(function() {
      $('.whatIsLinqContainer .whatIsLinqCard').addClass('fadeInUp');
  }, { offset: '100%' });

});
