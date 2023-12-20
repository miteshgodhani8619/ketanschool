jQuery(document).ready(function(){



// Header Sticky
jQuery(window).on('scroll',function() {

	if (jQuery(this).scrollTop() > 120){  

		jQuery('header').addClass("is-sticky");

	}
	else{

		jQuery('header').removeClass("is-sticky");
	}
});
	
	jQuery('.owl-carousel').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		mouseDrag: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		}
	})
	jQuery('.owl-item').addClass("col-md-3 col-6");

});