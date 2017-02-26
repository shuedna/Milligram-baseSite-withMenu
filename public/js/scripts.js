"use strict";

(function () {
	
	function menu () {
		if($('#menuBody').val() == "") {
			$('#menuBody').removeClass('mobilehide')
			$('#menuBody').val('flex')
		}else if($('#menuBody').val() == "none") {
			$('#menuBody').removeClass('mobilehide')
			$('#menuBody').val('flex')
		}else if($('#menuBody').val() == "flex") {
			$('#menuBody').addClass('mobilehide')
			$('#menuBody').val('none')
		}
	}
	
	$('#menubtn').on('click',function () {
		menu()
		console.log('click')
	})
	
	console.log('script')
	
})()