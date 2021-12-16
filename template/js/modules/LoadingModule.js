export default function LoadingModule() {
	if ($('body')) {
		

		$(window).scroll(function () { 
			const body = $('html,body');
			$('body').stop().addClass('active');

			body.on('transitionend', function (e) {
				$('body').stop().removeClass('active');
				e.stopPropagation();
			});

			// lastScrollTop = st <= 0 ? 0 : st;
		});

		

		

		
	}

	
}