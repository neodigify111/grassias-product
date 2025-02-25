jQuery(document).ready( function($){

  // product slider
  var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 3,
      freeMode: false,
      watchSlidesProgress: true,

    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

    $('.swiper-thumg-gallery > img:first-child').on('click', function(){
      $('.swiper-button-prev').trigger('click');
    });

    $('.swiper-thumg-gallery > img:last-child').on('click', function(){
      $('.swiper-button-next').trigger('click');
    });


    // calculator
      $('.grass-calculator a.button-2.w-button').on('click', function(e){

        e.preventDefault();

        var V1 = parseInt( $('#field-3').val() );
        var V2 = parseInt( $('#field-2').val() );

        if ( ! V1 || ! V2 ) {
          alert('Please, add value to Length and Width ');
        } else {
          var V3 = V1 * V2;
          $('.calc-text.extra').html( V3 + 'M<sup>2</sup>' );
        }
      });

      // counter
      $(".add-to-quantity.div-block-5 > div:last-child").on( 'click', function() {
        var value = parseInt( $(".add-to-quantity.div-block-5 > div:nth-child(2)").text().trim() );
        var NewValue = value + 1;
        $(".add-to-quantity.div-block-5 > div:nth-child(2)").text( NewValue );
      });
      $(".add-to-quantity.div-block-5 > div:first-child").on( 'click', function() {
        var value = parseInt( $(".add-to-quantity.div-block-5 > div:nth-child(2)").text().trim() );
        var NewValue = value - 1;
        if (value > 1) {
          $(".add-to-quantity.div-block-5 > div:nth-child(2)").text( NewValue );
        }
      });
      $(".extra-prod-plus-min.div-block-5 > div:last-child").on( 'click', function() {
        var value = parseInt( $(".extra-prod-plus-min.div-block-5 > div:nth-child(2)").text().trim() );
        var NewValue = value + 1;
        $(".extra-prod-plus-min.div-block-5 > div:nth-child(2)").text( NewValue );
      });
      $(".extra-prod-plus-min.div-block-5 > div:first-child").on( 'click', function() {
        var value = parseInt( $(".extra-prod-plus-min.div-block-5 > div:nth-child(2)").text().trim() );
        var NewValue = value - 1;
        if (value > 1) {
          $(".extra-prod-plus-min.div-block-5 > div:nth-child(2)").text( NewValue );
        }
      });

      // cart increament

      // variation
      $('.var-wrap .single-var').on('click', function(){
        $('.var-wrap .single-var , .var-wrap .single-var > div').removeClass('active');
        $(this).addClass('active');
        $('div', this ).addClass('active');
      });

      // product tab
      $('.prod-tab-block-1').on('click', function(){
        $('.prod-tab-block, .prod-tab-cont').removeClass('active');
        $(this).addClass('active');
        $('.prod-tab-cont-1').addClass('active');
      });

      $('.prod-tab-block-2').on('click', function(){
        $('.prod-tab-block, .prod-tab-cont').removeClass('active');
        $(this).addClass('active');
        $('.prod-tab-cont-2').addClass('active');
      });

      $('.prod-tab-block-3').on('click', function(){
        $('.prod-tab-block, .prod-tab-cont').removeClass('active');
        $(this).addClass('active');
        $('.prod-tab-cont-3').addClass('active');
      });


    // Mobile Menu
    $(document).on('click', '.grass-menu-trig', function(){
      $('#grass-mobile-menu').removeClass('hidden').addClass('active');
      $('body').css('overflow-y', 'hidden');
    });

    $('.grass-close-mob-menu').on('click', function () {
      $('#grass-mobile-menu').addClass('animated');
      setTimeout(function () {
        $('body').css('overflow-y', 'auto');
        $('#grass-mobile-menu').removeClass('animated').addClass('hidden');
      }, 500);
    });

    // faq
    $(".faq-question-wrap").on("click", function () {
      const content = $(this).find(".faq-content");
      // Remove .active class & close previously opened FAQs
      $(".faq-question-wrap").not(this).removeClass("active");
      $(".faq-content").not(content).css("height", "0px");
  
      // Toggle active class for clicked one
      $(this).toggleClass("active");
  
      // Expand or collapse the clicked one
      if ($(this).hasClass("active")) {
        content.css("height", content.prop("scrollHeight") + "px"); // Expand
      } else {
        content.css("height", "0px"); // Collapse
      }
    });

    // cart side bar
    $('.grasias-cart-bar').removeClass('!hidden');

    $(document).on('click', '.cart-pop-trig', function(){
      $('body').css('overflow-y', 'hidden');
      $('.grasias-cart-bar').removeClass('translate-x-[100%]');
    });
    $('.cart-close-pop').on('click', function(){
      $('body').css('overflow-y', 'unset');
      $('.grasias-cart-bar').addClass('translate-x-[100%]');
    });

 
// sticky header
$(".grass-header-element").clone().appendTo("#grass-header");
$("#grass-header").addClass('clone-active');

$(window).on("scroll", function() {
  $("#grass-header").each(function() {
      var elementTop = $('#grass-header').offset().top;
      var windowTop = $(window).scrollTop();
      console.log( windowTop );
      if ( 100 < windowTop ) {
        $(this).addClass("scroller");
      } else {
        $(this).removeClass("scroller");
      }
      if (elementTop <= windowTop) {
          $(this).addClass("fixed");
      } else {
          $("#grass-header").removeClass("fixed");
      }
  });
});

$("#grass-header").each(function() {
  var elementTop = $('#grass-header').offset().top;
  var windowTop = $(window).scrollTop();
  if ( 100 < windowTop ) {
    $(this).addClass("scroller");
  } else {
    $(this).removeClass("scroller");
  }
  if (elementTop <= windowTop) {
      $(this).addClass("fixed");
  } else {
      $("#grass-header").removeClass("fixed");
  }
});



});