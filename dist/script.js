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

if (document.documentElement.clientWidth >= 768) {
  console.log(document.documentElement.clientWidth);
  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(100);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(100);
  });
}

$(document).ready(function(){
  // hide our element on page load
  $('.whatIsLinqContainer .whatIsLinqHeading').css('opacity', 0);
  $('.ourPartnersContainer .whatIsLinqHeading').css('opacity', 0);
  $('.whyPartner .whatIsLinqText').css('opacity', 0);


  //$('#linqAdvantagesId').css('opacity', 0);
  //$('#benefitsOfOpeningStore').css('opacity', 0);

  $('.whatIsLinqContainer .whatIsLinqCard').css('opacity', 0);
  $('.whatIsLinqContainer .whatIsLinqText').css('opacity', 0);
  $('.ourPartnersContainer .rowOne').css('opacity', 0);
  $('.ourPartnersContainer .rowTwo').css('opacity', 0);

  $('.openAStoreContainer .openAStoreText').css('opacity', 0);
  $('.benfitsOfOpenStoreThumbnailLeft').css('opacity', 0);
  $('.benfitsOfOpenStoreThumbnailRight').css('opacity', 0);
  $('.benfitsOfOpenStoreThumbnailLeftSec').css('opacity', 0);
  $('.benfitsOfOpenStoreThumbnailRightSec').css('opacity', 0);
  $('#open-a-store-heading').css('opacity', 0);
  $('.franchiseReqAnim').css('opacity', 0);
  $('.testimonialAnim').css('opacity', 0);




  $('.whatIsLinqContainer .whatIsLinqHeading').waypoint(function() {
      $('.whatIsLinqContainer .whatIsLinqHeading').addClass('fadeIn');
  }, { offset: '100%' });

  $('.testimonialAnim').waypoint(function() {
      $('.testimonialAnim').addClass('fadeIn');
  }, { offset: '100%' });


  $('.whyPartner .whatIsLinqText').waypoint(function() {
      $('.whyPartner .whatIsLinqText').addClass('fadeInUp');
  }, { offset: '100%' });

  $('.ourPartnersContainer .whatIsLinqHeading').waypoint(function() {
      $('.ourPartnersContainer .whatIsLinqHeading').addClass('fadeIn');
  }, { offset: '100%' });

  $('.franchiseReqAnim').waypoint(function() {
      $('.franchiseReqAnim').addClass('fadeIn');
  }, { offset: '100%' });

  $('.whatIsLinqContainer .whatIsLinqText').waypoint(function() {
      $('.whatIsLinqContainer .whatIsLinqText').addClass('fadeIn');
  }, { offset: '100%' });

  $('#open-a-store-heading').waypoint(function() {
      $('#open-a-store-heading').addClass('fadeIn');
  }, { offset: '100%' });

  $('.openAStoreContainer .openAStoreText').waypoint(function() {
      $('.openAStoreContainer .openAStoreText').addClass('fadeIn');
  }, { offset: '100%' });

  $('#benefitsOfOpeningStore').waypoint(function() {
      $('#benefitsOfOpeningStore').addClass('zoomIn');
  }, { offset: '100%' });

  $('.franchiseRequirementsHeading').waypoint(function() {
      $('.franchiseRequirementsHeading').addClass('zoomIn');
  }, { offset: '100%' });

  $('.whyPartner .whatIsLinqHeading').waypoint(function() {
      $('.whyPartner .whatIsLinqHeading').addClass('zoomIn');
  }, { offset: '100%' });

  $('.testimonialsContainer .whatIsLinqHeading').waypoint(function() {
      $('.testimonialsContainer .whatIsLinqHeading').addClass('zoomIn');
  }, { offset: '100%' });

  $('#linqAdvantagesId').waypoint(function() {
      $('#linqAdvantagesId').addClass('zoomIn');
  }, { offset: '100%' });

  $('.whatIsLinqContainer .whatIsLinqCard').waypoint(function() {
      $('.whatIsLinqContainer .whatIsLinqCard').addClass('fadeInUp');
  }, { offset: '100%' });

  $('.ourPartnersContainer .rowOne').waypoint(function() {
      $('.ourPartnersContainer .rowOne').addClass('fadeInUp');
  }, { offset: '100%' });

  $('.ourPartnersContainer .rowTwo').waypoint(function() {
      $('.ourPartnersContainer .rowTwo').addClass('fadeInUp');
  }, { offset: '100%' });

  $('.benfitsOfOpenStoreThumbnailRight').waypoint(function() {
      $('.benfitsOfOpenStoreThumbnailRight').addClass('fadeInRight');
  }, { offset: '100%' });

  $('.benfitsOfOpenStoreThumbnailLeft').waypoint(function() {
      $('.benfitsOfOpenStoreThumbnailLeft').addClass('fadeInLeft');
  }, { offset: '100%' });

  $('.benfitsOfOpenStoreThumbnailRightSec').waypoint(function() {
      $('.benfitsOfOpenStoreThumbnailRightSec').addClass('fadeInRight');
  }, { offset: '100%' });

  $('.benfitsOfOpenStoreThumbnailLeftSec').waypoint(function() {
      $('.benfitsOfOpenStoreThumbnailLeftSec').addClass('fadeInLeft');
  }, { offset: '100%' });

  $('.franchiseReqDiv').waypoint(function() {
      $('.franchiseReqDiv').addClass('reached');
  }, { offset: '50%' });

});


$(function() {
    $(".root").fadeIn(2000);
    $(".preload").css('display', 'none');
});
