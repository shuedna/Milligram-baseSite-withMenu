"use strict";

(function () {
	
	$('#menubtn').on('click',function () {
		if($('#menuBody').val() == "none" || $('#menuBody').val() == "") {
			$('#menuBody').val('flex').removeClass('mobilehide')
		}else if($('#menuBody').val() == "flex") {
			$('#menuBody').val('none').addClass('mobilehide')
		}
		//console.log('click')
	})
	
	console.log('script')
	
})()
