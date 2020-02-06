document.addEventListener("DOMContentLoaded", function() {

	if (window.matchMedia("(min-width: 576px)").matches) {
		
		$('.latestPhotos__slides').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: $('.latestPhotos__bars'),
			nextArrow: $('.latestPhotos__next'),
			prevArrow: $('.latestPhotos__prev'),
			responsive: [
				{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
				},
			]
		});

		$('.latestPhotos__bars').slick({
			slidesToShow: 4,
			asNavFor: $('.latestPhotos__slides'),
			centerMode: true,
			focusOnSelect: true
		});

	}

	$('.latestNews__slides').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: $('.latestNews__bars'),
		nextArrow: $('.latestNews__next'),
		prevArrow: $('.latestNews__prev'),
	})

	$('.latestNews__bars').slick({
		slidesToShow: 3,
		asNavFor: $('.latestNews__slides'),
		centerMode: true,
		focusOnSelect: true
	});

	$('.headerMenu__mobileBars').on('click', function(){

		$('.headerMenu__list').toggleClass('headerMenu__mobileList--active')

	})

});
