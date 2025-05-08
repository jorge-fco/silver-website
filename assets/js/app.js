/*
	📁 APP JS

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
				APP.Cover();
				APP.Slider();
				APP.Navigation();
				APP.Gallery();
				APP.Location();
				APP.Contact();
				APP.Footer();
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
			// Show options
			gsap.to($('.header__navigation'), 1,{
				delay: 1,
				y: 0,
				autoAlpha: 1,
				ease: "circ.inOut"
			});

			// Click Nav Options
			$Navigation.click(function(event) {
				event.preventDefault();

				// Get
				var _id = $(this).data('id');
				var _section = $(_id).offset().top;

				// Clean
				$Navigation.removeClass('is--active');

				// Scroll section
				gsap.to(window, 1,{
					duration: 1,
					autoKill: true,
					ease: "power2.inOut",
					scrollTo: _section
				});

				// Active option
				$(this).addClass('is--active');
			});

			// Init
			var controller = new ScrollMagic.Controller();

			// Nav change color
			var scene = new ScrollMagic.Scene({
				triggerElement: ".home__gallery__title",
			})
			.setClassToggle('.js-header-navigation ul li a', 'is--scroll')
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);
		},
		Cover: function(){
			gsap.to($('.home__cover__image img'), 1,{
				delay: 1,
				scale: 1,
				ease: "circ.inOut"
			});

			gsap.to($('.home__cover__text data'), 0.5,{
				delay: 0.25,
				autoAlpha: 1,
				ease: "expo.inOut"
			});

			gsap.to($('.home__cover__text p'), 0.5,{
				delay: 0.5,
				y: 0,
				autoAlpha: 1,
				ease: "expo.inOut"
			});

			gsap.to($('.home__cover__text a'), 0.5,{
				delay: 0.75,
				y: 0,
				autoAlpha: 1,
				ease: "expo.inOut"
			});

			gsap.to($('.whatsapp__component'), 0.5,{
				delay: 1,
				autoAlpha: 1,
				ease: "expo.inOut"
			});

			gsap.to($('.whatsapp__component a'), 0.5,{
				delay: 1.25,
				scale: 1,
				autoAlpha: 1,
				ease: "expo.inOut"
			});
		},
		Gallery: function(){
			// Init
			var controller = new ScrollMagic.Controller();

			// Title
			var scene = new ScrollMagic.Scene({
				triggerElement: ".home__gallery",
				duration: 100
			})
			.setTween(".home__gallery__title h3", 1,{
				delay: 0,
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);

			// Text
			var scene = new ScrollMagic.Scene({
				triggerElement: ".home__gallery__title",
				duration: 100
			})
			.setTween(".home__gallery__title p", 1,{
				delay: 0,
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);

			// Slider
			var scene = new ScrollMagic.Scene({
				triggerElement: ".home__gallery__title p",
				duration: 100
			})
			.setTween(".home__slider__container", 1,{
				delay: 0,
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);
		},
		Location: function(){
			// Init
			var controller = new ScrollMagic.Controller();

			// Title
			var scene = new ScrollMagic.Scene({
				triggerElement: ".home__location",
				duration: 50
			})
			.setTween(".home__location__title p", 6,{
				delay: 0,
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);

			// SubTitle
			var scene = new ScrollMagic.Scene({
				triggerElement: ".home__location__title",
				duration: 100
			})
			.setTween(".home__location__information h3", 6,{
				delay: 0,
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);

			// Text
			var scene = new ScrollMagic.Scene({
				triggerElement: ".home__location__information",
				duration: 120
			})
			.setTween(".home__location__information p", 6,{
				delay: 0,
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);

			// Image
			var scene = new ScrollMagic.Scene({
				triggerElement: ".home__location__information",
				duration: 120
			})
			.setTween(".home__location__google svg", 6,{
				delay: 0,
				scale: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);
		},
		Contact: function(){
			// Init
			var controller = new ScrollMagic.Controller();

			// Image
			var scene = new ScrollMagic.Scene({
				triggerElement: ".home__location__marquee",
				duration: 200
			})
			.setTween(".home__contact__thumb img", 6,{
				delay: 0,
				scale: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);
		},
		Footer: function(){
			// Init
			var controller = new ScrollMagic.Controller();

			// Contact
			var scene = new ScrollMagic.Scene({
				triggerElement: ".select__component",
				duration: 10
			})
			.setTween(".footer__contact", 0.5,{
				delay: 0,
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);

			// Contact
			var scene = new ScrollMagic.Scene({
				triggerElement: ".select__component",
				duration: 10
			})
			.setTween(".footer__address", 0.5,{
				delay: 0,
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);

			// Social
			var scene = new ScrollMagic.Scene({
				triggerElement: ".select__component",
				duration: 10
			})
			.setTween(".footer__social", 0.5,{
				delay: 0,
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);

			// Logo
			var scene = new ScrollMagic.Scene({
				triggerElement: ".select__component",
				duration: 50
			})
			.setTween(".footer__logo", 1,{
				delay: 0,
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut
			})
			//.addIndicators({name: "1 (duration: 0)"})
			.addTo(controller);
		}
	};

	window.theme = APP;
	window.onload = function() {
		APP.init();
	};
})(jQuery);