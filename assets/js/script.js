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
				margin:10,
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

	jQuery(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-up').addClass('active');
		if (scrolled < 600) $('.go-up').removeClass('active');
	});  
	
	jQuery ('.go-up').on('click', function() {
		jQuery("html").animate({ scrollTop: "0" },  500);
	});

	
	// This code for Switching Theme


	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('theme', themeName);
		document.documentElement.className = themeName;
	}
	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTheme('theme-light');
		} else {
			setTheme('theme-dark');
		}
	}
	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTheme('theme-dark');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('theme-light');
		document.getElementById('slider').checked = true;
		}
	})();

});