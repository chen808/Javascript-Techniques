// everytime window scrolls, the following activates
$(window).scroll(function(){

	// pixels_from_topcontain how many pixels have been scrolled from top
	var pixels_from_top = $(this).scrollTop();

	// see the results in web browser console
	console.log("We have scrolled " + pixels_from_top + " pixels from the top");


	// if pixels_from_top goes beyond container-two - 200px...
	if(pixels_from_top > $('#container-two').offset().top-200){
		// ... then add class
		$('#container-two h1').addClass('turn-white animated rubberBand');
	}





}); // end window.scroll