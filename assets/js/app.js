/*
	📁 APP JS
	===
	👨🏻‍💻 Developer by Jorge Fco.™
	🌐 https://jorge-fco.com/
	©2025
*/
(function($){

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
				APP.GoogleMaps();
			}
		},
		Slider: function(){
			var $Slider = $('.js-home-slider-component');
			var $SliderPrev = $('.js-home-slider-prev');
			var $SliderNext = $('.js-home-slider-next');

			// ⚙️ Config
			$Slider.flickity({
				draggable: true,
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
		GoogleMaps: function(){

		}
	};

	window.theme = APP;
	window.onload = function() {
		APP.init();
	};
})(jQuery);