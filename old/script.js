var time = 200;
$(function(){
	$('section').hide();
	
	$(".main-item").each(function(index){
		var elem = $(".main-item")[index];
		$(elem).click(function() {
			$('.main-item').css("text-decoration", "none");
			$(this).css("text-decoration", "underline");
			$('section').hide(time);
			$(this.dataset.link).show(time);
		});
	});
});
