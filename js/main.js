
$(document).ready(function(){

	var $mainNav = $('.main-menu');
	$('.mobile-btn').on('click', function() {
		$(this).toggleClass('active_btn');
		$mainNav.slideToggle('fast', function(){
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
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

// END Скрипт плавного перехода к нужному блоку

//start go up
$(window).scroll(function() {
	if ($(this).scrollTop() > 900) {
		$('.js-go-up').fadeIn();
	} else {
		$('.js-go-up').fadeOut();
	}
});

$('.js-go-up').on("click", function() {
	$('body,html').animate({
		scrollTop: 0
	}, 1500);
	return true;
});
//end go up

//start go up
$(window).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$('.js-go-in').fadeIn();
	} else {
		$('.js-go-in').fadeOut();
	}
});

$('.js-go-in').on("click", function() {
	$('body,html').animate({
		scrollTop: 3000
	}, 1500);
	return true;
});
//end go up



$(window).scroll(function(){

	var st=$(this).scrollTop();
// ПАРАЛАКС ТЕКСТА
	$(".parallax_info").css({
		"transform":"translate(0%, "+st/3 +"%"
	});

});

});

