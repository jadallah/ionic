(function($){
	$(document).ready(function() {	

		
		$('#volumeButton').click(function() {
			const icon = $('#volumeIcon');
			icon.toggleClass('fa-volume-high fa-volume-xmark');
		  });

		  $('.toggle-btn button').click(function() {
			$('.nav-wrapper').toggleClass('nav-active');
			const icon = $(this).find('i');
			icon.toggleClass('fa-bars fa-xmark');
		  });
	
		  $(document).click(function(e) {
			if (!$(e.target).closest('.toggle-btn, .nav-wrapper').length) {
			  $('.nav-wrapper').removeClass('nav-active');
			  $('.toggle-btn button i').removeClass('fa-xmark').addClass('fa-bars');
			}
		  });

		  $('.mini-album').click(function() {
			$('.mini-album').removeClass('active');
			$(this).addClass('active');
			$('#albumTitle').text($(this).data('title'));
		  });
				
		
		
		
		
		
		
		
		
	});
})(jQuery);
