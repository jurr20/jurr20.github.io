$(document).ready(function(){

	// BEGIN HEADER-CAROUSEL

	  var owl = $("#header-carousel");

	  owl.owlCarousel({
	  	items:2,
	    navigation : true,
	    singleItem : true,
	    transitionStyle : "fade"
	  });

	  //Select Transtion Type
	  $("#transitionType").change(function(){
	    var newValue = $(this).val();

	    //TransitionTypes is owlCarousel inner method.
	    owl.data("owlCarousel").transitionTypes(newValue);

	    //After change type go to next slide
	    owl.trigger("owl.next");
	  });

	  // END HEADER-CAROUSEL

	  // BEGIN BLOG-CAROUSEL

	    var owl = $("#blog-carousel");

	    owl.owlCarousel({
	    	items:2,
	      navigation : true,
	      singleItem : true,
	      transitionStyle : "fade"
	    });

	    //Select Transtion Type
	    $("#transitionType").change(function(){
	      var newValue = $(this).val();

	      //TransitionTypes is owlCarousel inner method.
	      owl.data("owlCarousel").transitionTypes(newValue);

	      //After change type go to next slide
	      owl.trigger("owl.next");
	    });
	    
	    // END BLOG-CAROUSEL

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
});
