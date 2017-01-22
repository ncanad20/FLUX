$(document).ready(function(){
	var navbar = $('#nav_bar');
	var origOffsetY = navbar.offset().top;

	function scroll(){
		if($(window).scrollTop() >= origOffsetY){
			$('nav_bar').addClass('sticky');
		}else{
			$('nav_bar').removeClass('sticky');
		}
	}
})