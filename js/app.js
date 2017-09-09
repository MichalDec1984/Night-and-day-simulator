$(function() {
 	console.log("działa");
	$("#switch").click(function () {
		if ($(".page").hasClass("day")) {
			$(".page").removeClass("day");
			$(".page").addClass("night");
			$(".main").addClass("stadiumLight");
			$(".row").children("div").each(function(){
				$(this).css("animation-name", "pulsowanie");
			});
			$(".row1").children("div").each(function(){
				$(this).css("animation-name", "pulsowanie");
			});
			$(".row2").children("div").each(function(){
				$(this).css("animation-name", "pulsowanie");
			});
			$(".row3").children("div").each(function(){
				$(this).css("animation-name", "pulsowanie");
			});
			$(".whiteLight").removeClass("main2");
			$("#switch").removeClass("switched");
			//$(".white").removeClass("cloudAnimation");
			$(".white").removeClass("cloudVisible");
			//$(".moon").removeClass("wane");
			//$(".rising").removeClass("dawnSun");
			//$(".rising").addClass("daskSun");
			$(".fall").addClass("meteor");
			$(".falling").addClass("star");
		}
		else {
			$(".page").addClass("day");
			$(".page").removeClass("night")
			//$(".rising").addClass("dawnSun");
			$("#switch").addClass("switched");
			//$(".white").addClass("cloudAnimation");
			$(".white").addClass("cloudVisible");
			$(".fall").removeClass("meteor");
			$(".falling").removeClass("star");
			$(".main").removeClass("stadiumLight");
			$(".row").children("div").each(function(){
				$(this).css("animation-name", "none");
			});
			$(".row1").children("div").each(function(){
				$(this).css("animation-name", "none");
			});
			$(".row2").children("div").each(function(){
				$(this).css("animation-name", "none");
			});
			$(".row3").children("div").each(function(){
				$(this).css("animation-name", "none");
			});
			$(".whiteLight").addClass("main2");
			//$(".rising").removeClass("daskSun");
			$(".moon").addClass("wane");
		}
	});
});

