$(function() {

// Попап-форма

  $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
// Появление окна thanks
  $('.call__me').click(function() {
      $('.thanks').addClass('thanks__show');
      return false
  });

  $('.thanks__sh').click(function() {
      $('.thanks').rempveClass('thanks__show');
      return false
  });

// Плавное появление блока по клику

  $('.command__inner').click(function() {
    var w = $(window).width();
    if (w < 480) {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open').find('.command__inner-description ').slideUp().end().find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
      }  else {
        $(this).addClass('open').find('.command__inner-description ').slideDown().end().find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
        }
    }
  });
// Удаление display:none по resize
  $(window).resize(function(){
    var w = $(window).width();
    if (w > 480) {
      $('.our__advants-item-description-tetx').removeAttr('style');
    }
  });

//Карусель

  $(".owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      // autoHeight: true,
      autoplayTimeout: 10000,
      onInitialized: function() {
        $('.our__results-load1').addClass('loading');
      },
      onChange: function(){
        $('.our__results-load1').removeClass('loading');
        setTimeout(function() {
          $('.our__results-load1').addClass('loading')
        },10);
      }
  });

//Выравнивание блоков по высоте

  if ($(window).width() > 480) {
    $(".price__item-text").equalHeights();
    $(".price__item-title ").equalHeights();
  }

// Scrool to id

    $("a[href*='#top']").mPageScroll2id();
    $("a[href*='#our__results']").mPageScroll2id();
    $("a[href*='#price']").mPageScroll2id();
    $("a[href*='#footer']").mPageScroll2id();

// Прилипающее меню
  $(window).scroll(function(){
  		// 200px от верха
  		if ($(window).scrollTop() > '20'){
  			$('.header__top-menu-container').css({"background":"black"});
  		} else {
        	$('.header__top-menu-container').css({"background":"transparent"});
      }
  	});
// Модальное окно
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

  // Попапы в галерее

  $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});
  // Попап для видео

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

 });
