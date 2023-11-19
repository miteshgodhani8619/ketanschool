jQuery(document).ready(function(){



// Header Sticky
$(window).on('scroll',function() {

	if ($(this).scrollTop() > 120){  

		$('header').addClass("is-sticky");

	}
	else{

		$('header').removeClass("is-sticky");
	}
});


});