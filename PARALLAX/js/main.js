
$(window).scroll(function(){

	var st=$(this).scrollTop();
// ПАРАЛАКС ТЕКСТА
	$(".header_text").css({
		"transform":"translate(0%, "+st +"%"
	});

// ПАРАЛАКС ФОНА
	$(".sect_2 img").css({
		"transform":"translate(0%, -"+st/20 +"%"
	});

	$(".sect_3 img").css({
		"transform":"translate(0%, "+st/20 +"%"
	});

});