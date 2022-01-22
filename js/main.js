(function ($) {
"use strict";



 /*slider-active*/
$('.thumbneil-slider').owlCarousel({
	loop:true,
	autoplay:true,
	nav:false,
	dots:true,
	responsive:{
		0:{
			items:1
		},
		320:{
			items:1
		},
		600:{
			items:2
		},
		992:{
			items:3
		},
		1000:{
			items:4
		}
	}
})
		  





})(jQuery);