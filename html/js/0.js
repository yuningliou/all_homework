//JavaScript Document

$(document).ready(function(){

	$(".box").click(function(){
		
		$(".content").fadeToggle(1000);
		$(this).addClass("ch_bg");
	});	

});