// JavaScript Document

$(document).ready(function(){
	
	$(".menu").click(function(){ 
	
		$("nav").slideToggle();
		
	});
	
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();		
	});

//group
	$(".fancybox").fancybox({
		openEffect	: 'elastic', //'elastic', 'fade' or 'none'
		closeEffect	: 'elastic'
	});


//single
	$("#s2").fancybox({
    	openEffect	: 'elastic',// 'elastic', 'fade' or 'none'
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside' 
    			// some show up way like: 'float', 'inside', 'outside' or 'over'
    		}
    	}
    });



});
