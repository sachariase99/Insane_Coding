(function (document, window, $) {
	$(document).ready(function () {
		// Variables
		var windowWidth = $(window).width(), // Bredden på vinduet
			windowHeight = $(window).height(), // Højden på vinduet
			$header = $('header'), // Header-elementet
			reverseDirection; // Variabel til at holde styr på omvendt retning

		// header anchor tags
		function headerAnchors() {
			var pageDirection = ''; // Initialiser variabel for retning på siden
			var thisElement; // Deklarer variabel for det aktuelle element
			var timeout; // Deklarer variabel for timeout
			var pageTitle = ''; // Deklarer variabel for sidens navn

			// Hændelsesbehandler for $header.find('nav li a')
			$header.find('nav li a').click(function (event) {
				event.preventDefault();
				$('.cube').removeClass('reverse-' + pageDirection); // Fjerner omvendt retning på kube
				thisElement = $(this);
				pageDirection = thisElement.data('direction'); // Hent retningen for det aktuelle element
				reverseDirection = thisElement.data('reverse-direction'); // Hent omvendt retning for det aktuelle element
				thisElement.parent().addClass('active').siblings().removeClass('active'); // Tilføj aktiv klasse til det aktuelle element og fjern fra søskende
				$('.cube').addClass('reverse-' + pageDirection); // Tilføj omvendt retning på kube

				$header.addClass('go-out'); // Tilføj klasse for at sende header ud
				$('#wrap').addClass('active'); // Tilføj aktiv klasse til wrap-elementet
				clearTimeout(timeout);
				timeout = setTimeout(function () {
					$header.removeClass('go-out'); // Fjern klasse for at sende header ud
					$('#wrap').removeClass('active'); // Fjern aktiv klasse fra wrap-elementet
					
					// Update the page title
					document.title = pageTitle;
				  }, 1000);

				pageTitle = thisElement.text(); // Set the page title to the clicked element's text
			});

			// Hændelsesbehandler for #menuList li a
			$('#menuList li a').click(function (event) {
				event.preventDefault();
				var targetDirection = $(this).data('direction'); // Hent retningen for det aktuelle element
				var $headerNavItem = $header.find('nav li a[data-direction="' + targetDirection + '"]'); // Find header-elementet med samme retning

				$('.cube').removeClass('reverse-' + pageDirection); // Fjerner omvendt retning på kube
				thisElement = $(this);
				pageDirection = thisElement.data('direction'); // Hent retningen for det aktuelle element
				reverseDirection = thisElement.data('reverse-direction'); // Hent omvendt retning for det aktuelle element
				thisElement.parent().addClass('active').siblings().removeClass('active'); // Tilføj aktiv klasse til det aktuelle element og fjern fra søskende
				$('.cube').addClass('reverse-' + pageDirection); // Tilføj omvendt retning på kube

				$header.addClass('go-out'); // Tilføj klasse for at sende header ud
				$('#wrap').addClass('active'); // Tilføj aktiv klasse til wrap-elementet
				clearTimeout(timeout);
				timeout = setTimeout(function () {
					$header.removeClass('go-out'); // Fjern klasse for at sende header ud
					$('#wrap').removeClass('active'); // Fjern aktiv klasse fra wrap-elementet
					
					// Update the page title
					document.title = pageTitle;
				  }, 1000);

				$headerNavItem.parent().addClass('active').siblings().removeClass('active'); // Tilføj aktiv klasse til header-elementet og fjern fra søskende

				pageTitle = thisElement.text(); // Set the page title to the clicked element's text
			});
		}

		headerAnchors();

		$(window).resize(function () {
			// Vars
			windowWidth = $(window).width(); // Opdater bredden på vinduet
			windowHeight = $(window).height(); // Opdater højden på vinduet
			// Functions
		});
	});
})(document, window, jQuery);
