var Call_Cherry_Portfolio_Magnific;

jQuery(document).ready(function() {
	Call_Cherry_Portfolio_Magnific = function(){
		jQuery('.magnific-popup-link').magnificPopup({
			type: 'image'
		});
		jQuery('.magnific-popup-zoom').magnificPopup({
			type: 'image'
		});
	}
	Call_Cherry_Portfolio_Magnific();

	jQuery('.portfolio-wrap').cherryPortfolioLayoutPlugin();

	jQuery('.swiper-container').each(function(){
		var
			swiper
		,	slides_per_view = parseFloat( jQuery(this).data('slides-per-view') )
		,	slides_per_column = parseFloat( jQuery(this).data('slides-per-column') )
		,	space_between_slides = parseFloat( jQuery(this).data('space-between-slides') )
		,	swiper_loop = jQuery(this).data('swiper-loop')
		,	duration_speed = parseFloat( jQuery(this).data('duration-speed') )
		,	free_mode = jQuery(this).data('free-mode')
		,	grab_cursor = jQuery(this).data('grab-cursor')
		,	mouse_wheel = jQuery(this).data('mouse-wheel')
		,	swiper_effect = jQuery(this).data('swiper-effect')
		,	uniqId = jQuery(this).data('uniq-id')
		;

		switch ( swiper_effect ) {
			case 'swiper-effect-slide':
				swiper_effect = 'slide';
				break
			case 'swiper-effect-fade':
				swiper_effect = 'fade';
				slides_per_view = 1;
				slides_per_column = 1;
				break
			case 'swiper-effect-cube':
				swiper_effect = 'cube';
				break
			case 'swiper-effect-coverflow':
				swiper_effect = 'coverflow';
				break
		}

		swiper = new Swiper( jQuery('#'+uniqId), {
				speed: duration_speed,
				slidesPerView: slides_per_view,
				spaceBetween: space_between_slides,
				grabCursor: grab_cursor,
				loop: swiper_loop,
				freeMode: free_mode,
				nextButton: '#' + uniqId + '-next',
				prevButton: '#' + uniqId + '-prev',
				pagination: '#' + uniqId + '-pagination',
				paginationClickable: true,
				mousewheelControl: mouse_wheel,
				slidesPerColumn: slides_per_column,
				effect: swiper_effect,
			}
		);
	})

});
