$(function () {
  //Top Fixed 
  if ($(window).width() > 576) {
    var scrollTop = 0;
    if ($(this).scrollTop() > 50) {
      $('header').addClass('is-sticky');
    } else if ($(this).scrollTop() < 50) {
      $('header').removeClass('is-sticky');
    }
    } 

  // scroll Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  //User Slick
  $('.user-wrap').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  //Tabs
  $('.plan-tabs li a').on('click', function (e) {
    e.preventDefault();

    let id_tab = $(this).attr('href');
    $('.plan-tabs li a').removeClass('active');
    $(this).addClass('active');
    $('.tab-item:visible').hide();
    $(id_tab).fadeIn();

    return false;
  });

  //accordion
  $('.qa-link').on('click', function (e) {
    e.preventDefault();
    $this = $(this);
    
    // title animation on click
    $this.toggleClass('active');
    $this.parent().siblings().children('.qa-link').removeClass('active');

    // slide down animation body
    $this.next('.qa-collapse').slideToggle().toggleClass('show');
    $this.parent().siblings().children('.qa-collapse').slideUp();

    return false;
  });

  
});

