(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('#menuModal').modal('hide');
  });

  $('#menuModal').on('hidden.bs.modal', function (e) {
      $('body').removeClass('js-no-scroll')
  });
  $('#menuModal').on('shown.bs.modal', function (e) {
      $('body').addClass('js-no-scroll')
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

    $('#review-carousel').owlCarousel({
        items:2,
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    $('#case-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        animateOut: 'fadeOut'
    });

    $('form .form-control').focus(function (){
        $(this).prev().css('color', '#00C2FF');
    })
        .blur(function () {
            $('form .form-control').prev().css('color', '#ffffff');
        });

    $(".plan-btn a, #about a, .wt-block-intro a").click(function (){
        $("form .form-control[type=text]").focus();
    });

    $(".plan-btn a.btn_blue").click(function (){
        $("form .form-check #plan1").prop('checked', true);
    });
    $(".plan-btn a.btn_green").click(function (){
        $("form .form-check #plan2").prop('checked', true);
    });
    $(".plan-btn a.btn_yellow").click(function (){
        $("form .form-check #plan3").prop('checked', true);
    })
})(jQuery); // End of use strict
function noselect() {return false;}