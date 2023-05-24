(function (document, window, $) {
	$(document).ready(function () {
		// Variables
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			$header = $('header'),
			reverseDirection; // Declare reverseDirection variable

		// header anchor tags
		function headerAnchors() {
			var pageDirection = ''; // Initialize pageDirection variable
			var thisElement; // Declare thisElement variable
			var timeout; // Declare timeout variable

			// Event handler for $header.find('nav li a')
			$header.find('nav li a').click(function (event) {
				event.preventDefault();
				$('.cube').removeClass('reverse-' + pageDirection);
				thisElement = $(this);
				pageDirection = thisElement.data('direction');
				reverseDirection = thisElement.data('reverse-direction');
				thisElement.parent().addClass('active').siblings().removeClass('active');
				$('.cube').addClass('reverse-' + pageDirection);

				$header.addClass('go-out');
				$('#wrap').addClass('active');
				clearTimeout(timeout);
				timeout = setTimeout(function () {
					$header.removeClass('go-out');
					$('#wrap').removeClass('active');
				}, 1000);
			});

			// Event handler for #menuList li a
			$('#menuList li a').click(function (event) {
				event.preventDefault();
				var targetDirection = $(this).data('direction');
				var $headerNavItem = $header.find('nav li a[data-direction="' + targetDirection + '"]');

				$('.cube').removeClass('reverse-' + pageDirection);
				thisElement = $(this);
				pageDirection = thisElement.data('direction');
				reverseDirection = thisElement.data('reverse-direction');
				thisElement.parent().addClass('active').siblings().removeClass('active');
				$('.cube').addClass('reverse-' + pageDirection);

				$header.addClass('go-out');
				$('#wrap').addClass('active');
				clearTimeout(timeout);
				timeout = setTimeout(function () {
					$header.removeClass('go-out');
					$('#wrap').removeClass('active');
				}, 1000);

				$headerNavItem.parent().addClass('active').siblings().removeClass('active');
			});
		}

		headerAnchors();

		$(window).resize(function () {
			// Vars
			windowWidth = $(window).width();
			windowHeight = $(window).height();
			// Functions
		});
	});
})(document, window, jQuery);
