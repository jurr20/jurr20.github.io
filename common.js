$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://'+github.com/jurr20/jurr20.github.io/blob/master+'/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});
