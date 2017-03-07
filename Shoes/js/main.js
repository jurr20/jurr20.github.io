
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		$(".sect-paralax img").css({
			"transform" : "translate(0%, -" + st/20 + "%"
		});
	});


// main
$(document).ready(function(){

	$('.slider_brands_list').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		navText: [
			"<i class='icon-arrow-left'></i>",
			"<i class='icon-arrow-right'></i>"
		],
		slideBy: 3,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
			},
			500:{
				items:3,
			},
			700:{
				items:4,
			},
			900:{
				items:5,
			}
		}
	})
	$('.slider_instagram_list').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		navContainer: ".instagram_nav",
		navText: [
			"<i class='icon-arrow-left'></i>",
			"<i class='icon-arrow-right'></i>"
		],
		slideBy: 3,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
			},
			600:{
				items:3,
			},
			800:{
				items:4,
			},
			1000:{
				items:5,
			}
		}
	})
	$('.slider_goods_list_one').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000,
		navContainer: ".goods_nav_one",
		navText: [
			"<i class='icon-arrow-left'></i>",
			"<i class='icon-arrow-right'></i>"
		],
		slideBy: 1,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			498:{
				items:2,
			},
			740:{
				items:3,
			},
			982:{
				items:4,
			},
			1224:{
				items:4,
			}
		}
	})
	$('.slider_goods_list_two').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000,
		navContainer: ".goods_nav_two",
		navText: [
			"<i class='icon-arrow-left'></i>",
			"<i class='icon-arrow-right'></i>"
		],
		slideBy: 1,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			498:{
				items:2,
			},
			740:{
				items:3,
			},
			982:{
				items:4,
			},
			1224:{
				items:4,
			}
		}
	})

	var owl_collections_list = $('.slider_collections_list');
	owl_collections_list.owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		nav: true,
		navText: [
			"<i class='icon-arrow-left'></i>",
			"<i class='icon-arrow-right'></i>"
		]
	});
	owl_collections_list.on('changed.owl.carousel', function(event) {
		var current = event.item.index;
		var text = $(event.target).find('.owl-item').eq(current).find('.item').attr('data-text');
		$('.owl-description').hide().text(text).fadeIn();
	})

	$('.slider_images_list').owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		nav: true,
		navText: [
			"<i class='icon-arrow-left'></i>",
			"<i class='icon-arrow-right'></i>"
		],
	})
	$('.slider_list_collections').owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		nav: true,
		navText: [
			"<i class='icon-arrow-left'></i>",
			"<i class='icon-arrow-right'></i>"
		],
	})

	$('.js_hide_filer').on('click', function() {
		var $this = $(this);
		$this.toggleClass('active');
		// $this.parent('.filter_head').next('.filter_content').slideToggle(500);
		$this.next('.filter_content').slideToggle(500);
	});

	$('.js_thumbnail').mouseenter(function(){
		var $this = $(this);
		if(!$this.hasClass('active')) {
			$('.js_thumbnail').removeClass('active');
			$this.addClass('active');
			var $bigImage = $this.attr('data-big-image');
			$('.js_big_image').attr('src', $bigImage);
		}
	});
	$('.js_menu_item').mouseenter(function(){
		var $this = $(this);
		if(!$this.hasClass('active')) {
			$this.closest('.list_items_previews').find('.js_menu_item').removeClass('active');
			$this.addClass('active');
			var text = $this.attr('data-text');
			var image = $this.attr('data-image');
			var href = $this.attr('href');
			var blockParent = $this.closest('.previews').find('.preview_info');
			blockParent.find('.text p').text(text);
			blockParent.find('.image').attr('href', href);
			blockParent.find('.image img').attr('src', image);
		}
	});

	var interval;
	$('.sub_menu > li').mouseenter(function(){
		var $this = $(this);
		clearTimeout(interval);
		$('.sub_menu .drop').hide();
		$('.sub_menu > li').removeClass('active');
		$this.addClass('active');
		$this.find('.drop').show();
	}).mouseleave(function() {
		var $this = $(this);
		interval = setTimeout(function() {
			$this.removeClass('active');
			$this.find('.drop').hide();
		}, 300)
	});

	$('.js_show_filters').on('click', function() {
		var $this = $(this);
		var $next_block = $this.next();
		var $text_show = $this.find('.show_text');
		var $text_hide = $this.find('.hide_text');
		if($next_block.is(':hidden')) {
			$next_block.slideDown();
			$text_show.hide();
			$text_hide.show();
		} else {
			$next_block.slideUp();
			$text_show.show();
			$text_hide.hide();
		}
	});

	$('.js_show_video_info').on('click', function() {
			var $this = $(this);
			var $blockText = $this.prev();
			var $textShow = $this.find('.textShow');
			var $textHide = $this.find('.textHide');

			if($blockText.hasClass('full')) {
				$blockText.removeClass('full');
				$textShow.show();
				$textHide.hide();
			}
			else {
				$blockText.addClass('full');
				$textShow.hide();
				$textHide.show();
			}
		});


	$(".phone").click(function(e) {
	e.preventDefault();
	$(".search_block").toggleClass('show');
	})

	$(".send-sms").click(function(e) {
	e.preventDefault();
	$(".popup_form").toggleClass('show_form');
	})

	$(".overlay").click(function(e) {
	e.preventDefault();
	$(".popup_form").removeClass('show_form');
	})

	$(".close-icon").click(function(e) {
	e.preventDefault();
	$(".popup_form").removeClass('show_form');
	})


});

$(window).load(function() {
	if ($(window).width() > 700) {
		$('.js_scroll').jScrollPane();
	}

	$('.collection_images').masonry({
		itemSelector: '.image',
		isFitWidth: true
	});

	// $('.js_collage').collagePlus();
	// $('.js_collage').removeWhitespace().collagePlus();
	collage();
});

function collage() {
	$('.js_collage').removeWhitespace().collagePlus({
		'fadeSpeed' : 2000,
		'targetHeight' : 400,
	});
};

var resizeTimer = null;
$(window).bind('resize', function() {
	$('.js_collage a').css("opacity", 0);
	if (resizeTimer) clearTimeout(resizeTimer);
	resizeTimer = setTimeout(collage, 200);
});