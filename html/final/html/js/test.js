// JavaScript Document

$(document).ready(function(){
	
	$(".menu").click(function(){ 
	
		$("nav").slideToggle();
		
	});
	
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();		
	});

// buttom

$(document).ready(function(){

	$(".box").click(function(){

		$(".content").fadeToggle(3000);
		
		
	});	
	
});