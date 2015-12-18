var time = 200;
$(function(){
	$('section').hide();
	$("#main-games").mouseover(function() {
		$('#main li').css("text-decoration", "none");
		$("#main-games").css("text-decoration", "underline");
		$('section').hide(time);
		$("#games").show(time);
	})
	$("#main-programming").mouseover(function() {
		$('#main li').css("text-decoration", "none");
		$("#main-programming").css("text-decoration", "underline");
		$('section').hide(time);
		$("#programming").show(time);
	})
	$("#main-initiatives").mouseover(function() {
		$('#main li').css("text-decoration", "none");
		$("#main-initiatives").css("text-decoration", "underline");
		$('section').hide(time);
		$("#initiatives").show(time);
	})
	$("#main-websites").mouseover(function() {
		$('#main li').css("text-decoration", "none");
		$("#main-websites").css("text-decoration", "underline");
		$('section').hide(time);
		$("#websites").show(time);
	})
	$("#main-comics").mouseover(function() {
		$('#main li').css("text-decoration", "none");
		$("#main-comics").css("text-decoration", "underline");
		$('section').hide(time);
		$("#comics").show(time);
	})
	$("#main-paintings").mouseover(function() {
		$('#main li').css("text-decoration", "none");
		$("#main-paintings").css("text-decoration", "underline");
		$('section').hide(time);
		$("#paintings").show(time);
	})
	$("#main-tutorials").mouseover(function() {
		$('#main li').css("text-decoration", "none");
		$("#main-tutorials").css("text-decoration", "underline");
		$('section').hide(time);
		$("#tutorials").show(time);
	})
	$("#main-prizes").mouseover(function() {
		$('#main li').css("text-decoration", "none");
		$("#main-prizes").css("text-decoration", "underline");
		$('section').hide(time);
		$("#prizes").show(time);
	})
	$("#main-musics").mouseover(function() {
		$('#main li').css("text-decoration", "none");
		$("#main-musics").css("text-decoration", "underline");
		$('section').hide(time);
		$("#musics").show(time);
	})
});
