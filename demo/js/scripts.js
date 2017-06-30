jQuery.noConflict()(function($) {
	
	'use strict';

	$(document).ready(function(){
		
		setTimeout(function(){
			$(".vl-preloader-holder").fadeOut(300);
			$("body").addClass("loaded");
		}, 1000);

		$(".vl-example-hoverfolio").hoverfolio();

		// DEMO
		$(".vl-example-hoverfolio a").on('click', function(e){
			e.preventDefault();
		});

	});

});
