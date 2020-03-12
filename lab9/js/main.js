jQuery(document).ready(function(){

	//slick
	jQuery('.slider-news').slick({
    // customPaging : function(slider, i) {
    //     return '<a href="#"><img src="images/dot.png" /><img src="images/dot-active.png" /></a>';
    // },
		dots: true,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev'><i class='icon ion-ios-arrow-back slide-prev'></i></button>",
		nextArrow:"<button type='button' class='slick-next'><i class='icon ion-ios-arrow-forward slide-next'></i></button>" ,
	});
	$('.menu-button').click(function(){
		$('.navbar__menu').toggleClass('navbar-active');
	});
	
	
});

