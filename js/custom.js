/* Show and hide Menubar */
$(document).ready(function () {
	'use strict';
	$(window).scroll(function () {
		'use strict';
		if ($(window).scrollTop() < 80) {
			$('.navbar').css({
				'margin-top': '-100px',
				opacity: '0',
			});
			$('.navbar-default').css({
				'background-color': 'rgba(59,59,59,0)',
			});
		} else {
			$('.navbar').css({
				'margin-top': '0px',
				opacity: '1',
			});
			$('.navbar-default').css({
				'background-color': 'rgba(59,59,59,0.7)',
				'border-color': '#444',
			});
			$('.navbar-brand img').css({
				'padding-top': '0px',
				height: '35px',
			});
			$('.navbar-nav > li > a').css({
				'padding-top': '15px',
			});
		}
	});
	console.log('Document is ready.');
});

$(window).load(function () {
	console.log('Window is loaded.');
});

//add smooth scrolling to nav bar
$(document).ready(function () {
	'use strict';
	$('.nav-item, #scroll-to-top').click(function () {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top,
					},
					1000
				);
				return false;
			}
		}
	});
});

// active menu item on click
$(document).ready(function () {
	'use strict';
	$('.navbar-nav > li > a').click(function () {
		'use strict';
		$('.navbar-nav > li > a').parent().removeClass('active');
		$(this).parent().addClass('active');
	});
});

//highlight menuitem on scroll
$(document).ready(function () {
	'use strict';
	$(window).scroll(function () {
		'use strict';
		$('section').each(function () {
			'use strict';
			var id = $(this).attr('id'); //about , contact , download
			var height = $(this).outerHeight();
			var grttop = $(this).offset().top - 70;

			if (
				$(window).scrollTop() > grttop &&
				$(window).scrollTop() < grttop + height
			) {
				$(".navbar-nav > li > a[href='#" + id + "'] ")
					.parent()
					.addClass('active');
			} else {
				$(".navbar-nav > li > a[href='#" + id + "'] ")
					.parent()
					.removeClass('active');
			}
		});
	});
});

//add autopadding to header
$(document).ready(function () {
	'use strict';
	// setInterval(function () {
	// 	'use strict';
	// 	var windowHeight = $(window).height();
	// 	var containerHeight = $('.header-container').height();
	// 	var padding = windowHeight - containerHeight;
	// 	console.log('-----header-container---', windowHeight, containerHeight);
	// 	$('.header-container').css({
	// 		'padding-top': Math.round(padding / 2) + 'px',
	// 		'padding-bottom': Math.round(padding / 2) + 'px',
	// 	});
	// }, 10);
});

//add bx-slider to screen
$(document).ready(function () {
	$('.bxslider').bxSlider({
		slideWidth: 292.5,
		auto: true,
		minSlides: 1,
		maxSlides: 3,
		slideMargin: 50,
	});
});

// add counter
$(document).ready(function () {
	$('.counter-num').counterUp({
		delay: 10,
		time: 2000,
	});
});

//add animation / initilaize wow
$(document).ready(function () {
	'use strict';
	new WOW().init();
});
