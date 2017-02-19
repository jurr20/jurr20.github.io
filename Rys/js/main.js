
$(document).ready(function() {

	$(function(){
	  $('.tab-nav li:first').addClass('select');                                                                 // Первой вкладке добавляетсякласс select
	  $('#standart').addClass('tab-show')
	  // $('.tab-box .tab-panels>div').css('opacity',0).filter(":first").css('opacity',1);                          // Всем блокам кроме первого задается прозрачность 0
	  $('.tab-nav a').click(function(event){
	  	  event.preventDefault();                                                                          // При клике на вкладку
	      // $('.tab-box .tab-panels>div').animate({'opacity':1},300).filter(this.hash).animate({'opacity':1},300); // - блок с описанием текущей вкладки плавно становится видимым
	      $('.tab-nav li').removeClass('select');                                                                // - удаляется класс 'select' у активной ранее вкладки
	      $(this).parent().addClass('select');                                                                   // - добавляется класс 'select' для выбранной вкладки        

	      $('.tab-page').removeClass('tab-show');
	      var page = $(this).data('page');
	      $(document).find('#' + page).addClass('tab-show')
	    })  
	})


	var $mainNav = $('.main-menu');
	$('.mobile-btn').on('click', function() {
		$(this).toggleClass('active_btn');
		$mainNav.slideToggle('esear', function(){
			$mainNav.removeAttr('style').toggleClass('open');
		});
	});


	// BEGIN Скрипт плавного перехода к нужному блоку

		$("#menu").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - ($(document).width() > 991 ? 74 : 0);
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
		});

	// // END Скрипт плавного перехода к нужному блоку

	// // BEGIN Скрипт плавного перехода к нужному блоку

		$(".header-line").on("click",".logo", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
		});

	// END Скрипт плавного перехода к нужному блоку

	// BEGIN открытие фрейма
	$(".header-button").click(function(e) {
		e.preventDefault();
		$(".modal-iframe").toggleClass('show-iframe');
	})

	$(".header-line").click(function(e) {
		$(".modal-iframe").removeClass('show-iframe');
	})

	$(".close-icon").click(function(e) {
		e.preventDefault();
		$(".modal-iframe").removeClass('show-iframe');
	})

	$(".overlay-iframe").click(function(e) {
		e.preventDefault();
		$(".modal-iframe").removeClass('show-iframe');
	})

	$( '.modal-iframe' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
	    var e0 = e.originalEvent,
	        delta = e0.wheelDelta || -e0.detail;
	    
	    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
	    e.preventDefault();
	});
	
	$( '.modal-questions' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
	    var e0 = e.originalEvent,
	        delta = e0.wheelDelta || -e0.detail;
	    
	    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
	    e.preventDefault();
	});



	$('.carousel-benefits .owl-carousel').owlCarousel({
		items:1, /* К-во картинок, выводящихся на экран, в слайдере*/
	    loop:true,/*цыкличность слайдеров*/
	    dots: true,
	    dotsContainer: '#carousel-custom-dots',
	    nav: true,
	    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	    navSpeed:1000,
	    dotsSpeed:1000
	    // autoplay: true,/*автоматическое переключение слайдеров*/
	    // nav:true,/*стреловки вперед-назад */
	})
	$('.carousel-reviews .owl-carousel').owlCarousel({
		items:3, /* К-во картинок, выводящихся на экран, в слайдере*/
	    loop:true,/*цыкличность слайдеров*/
	    autoplay: false,/*автоматическое переключение слайдеров*/
	    nav: true,
	    slideBy: 3,
	    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	    dots:false,
	    responsiveClass:true,
	    responsive:{
	    	0:{
	    		items:1,
	    	},
	    	750:{
	    		items:2,
	    	},
	    	1020:{
	    		items:3,
	    	}
	    }
	})
	$('.owl-dot').click(function () {
	    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
	});
	

// MODAL COPYRIGHT

	$( '.modal-questions' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
	    var e0 = e.originalEvent,
	        delta = e0.wheelDelta || -e0.detail;
	    
	    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
	    e.preventDefault();
	});

	$( '.questions-overlay' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
	    var e0 = e.originalEvent,
	        delta = e0.wheelDelta || -e0.detail;
	    
	    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
	    e.preventDefault();
	});

	$(".no-body-scrollbar").click(function(e) {
		$("body").addClass('scrollbar');
	})
	$(".questions-overlay").click(function(e) {
		$("body").removeClass('scrollbar');
	})
	$(".close-modal-questions").click(function(e) {
		$("body").removeClass('scrollbar');
	})

// reviews
	$(".button-add-reviews").click(function(e) {
		e.preventDefault();
		$(".holder-modal-reviews").addClass('show-modal');
	})

	$(".close-modal-questions").click(function(e) {
		e.preventDefault();
		$(".holder-modal-reviews").removeClass('show-modal');
	})

	$(".questions-overlay").click(function(e) {
		e.preventDefault();
		$(".holder-modal-reviews").removeClass('show-modal');
	})
// questions
	$(".link-questions").click(function(e) {
		e.preventDefault();
		$(".holder-modal-questions").addClass('show-modal');
	})

	$(".close-modal-questions").click(function(e) {
		e.preventDefault();
		$(".holder-modal-questions").removeClass('show-modal');
	})

	$(".questions-overlay").click(function(e) {
		e.preventDefault();
		$(".holder-modal-questions").removeClass('show-modal');
	})
// work
	$(".link-work").click(function(e) {
		e.preventDefault();
		$(".holder-modal-work").addClass('show-modal');
	})

	$(".close-modal-questions").click(function(e) {
		e.preventDefault();
		$(".holder-modal-work").removeClass('show-modal');
	})
	
	$(".questions-overlay").click(function(e) {
		e.preventDefault();
		$(".holder-modal-work").removeClass('show-modal');
	})
// payment
	$(".link-payment").click(function(e) {
		e.preventDefault();
		$(".holder-modal-payment").addClass('show-modal');
	})

	$(".close-modal-questions").click(function(e) {
		e.preventDefault();
		$(".holder-modal-payment").removeClass('show-modal');
	})
	
	$(".questions-overlay").click(function(e) {
		e.preventDefault();
		$(".holder-modal-payment").removeClass('show-modal');
	})
// contacts
	$(".link-contacts").click(function(e) {
		e.preventDefault();
		$(".holder-modal-contacts").addClass('show-modal');
	})

	$(".close-modal-questions").click(function(e) {
		e.preventDefault();
		$(".holder-modal-contacts").removeClass('show-modal');
	})
	
	$(".questions-overlay").click(function(e) {
		e.preventDefault();
		$(".holder-modal-contacts").removeClass('show-modal');
	})
// car
	$(".link-car").click(function(e) {
		e.preventDefault();
		$(".holder-modal-car").addClass('show-modal');
	})

	$(".close-modal-questions").click(function(e) {
		e.preventDefault();
		$(".holder-modal-car").removeClass('show-modal');
	})
	
	$(".questions-overlay").click(function(e) {
		e.preventDefault();
		$(".holder-modal-car").removeClass('show-modal');
	})
});
	







