$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		items:1, /* К-во картинок, выводящихся на экран, в слайдере*/
	    loop:true,/*цыкличность слайдеров*/
	    nav:false,/*стреловки вперед-назад */
	    autoplay: true,/*автоматическое переключение слайдеров*/
	})
	var $mainNav = $('.main-menu');
	$('.mobile-btn').on('click', function() {
		$(this).toggleClass('active_btn');
		$mainNav.slideToggle('fast', function(){
			$mainNav.removeAttr('style').toggleClass('open');
		});
	}); /*при приминении резины, прячет главное меню и заменяем его на иконку*/
});
