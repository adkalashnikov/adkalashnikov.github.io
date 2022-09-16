jQuery(document).ready(function($) {
	const headerHeight = $('.header').outerHeight();
	
	$(".banner,.main-section").css("margin-top" , headerHeight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.header').addClass('fixed-header');
	    }
	    else {
	        $('.header').removeClass('fixed-header');
	    }
	}).scroll();
});

// init animation lib
setTimeout(() => {
    AOS.init({
        once: true,
        duration: 1000,
        disable() {
            return window.innerWidth < 992;
        }
    });
}, 0);
