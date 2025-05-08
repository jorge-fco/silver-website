/*
	📁 APP JS
	===
	👨🏻‍💻 Developer by Jorge Fco.™
	🌐 https://jorge-fco.com/
	©2025
*/
(function($){

	var $Navigation = $('.js-header-navigation ul li a');
	var $Slider = $('.js-home-slider-component');
	var $SliderPrev = $('.js-home-slider-prev');
	var $SliderNext = $('.js-home-slider-next');

	// Pages
	Pages = [
		'.js-home',
	];

	// Core
	APP = {
		init: function(){
			console.log('✨ Focused on web technologies.');
			console.log('👨🏻‍💻 Developer by Jorge Fco.™');
			console.log('©2025');

			// ❓Check
			if($(Pages[0]).length){
				APP.Slider();
				APP.Navigation();
			}
		},
		Slider: function(){
			// ⚙️ Config
			$Slider.flickity({
				draggable: true,
				autoPlay: 2000,
				pauseAutoPlayOnHover: true,
				pageDots: false,
				prevNextButtons: false,
				wrapAround: true,
				cellAlign: 'center',
				contain: true,
				cellSelector: '.home__slider__item',
				freeScroll: false,
				freeScrollFriction: 0.03
			});

			// 🕹 Controls
			// Previous [ < ]
			$SliderPrev.on( 'click', function() {
				$Slider.flickity('previous');
			});

			// Next [ > ]
			$SliderNext.on( 'click', function() {
				$Slider.flickity('next');
			});
		},
		Navigation: function(){
			$Navigation.click(function(event) {
				event.preventDefault();
				var _id = $(this).data('id');

				alert(_id);
			});
		},
		GoogleMaps: function(){

		}
	};

	window.theme = APP;
	window.onload = function() {
		APP.init();
	};
})(jQuery);