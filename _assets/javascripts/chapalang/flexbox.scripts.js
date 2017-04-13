$(document).ready(function() {
	console.log("letsgo!");
	
	$('input[name="align-items-opt"]').change(function(){
		$('form#fb-align-items').submit(function(e) {
		  e.preventDefault();
		});
		var item=$('input:radio[name="align-items-opt"]:checked').val();
		$('.expt-box').css({'align-items':item});
		
	});

	$('input[name="justify-content-opt"]').change(function(){
		$('form#fb-justify-content').submit(function(e) {
		  e.preventDefault();
		});
		var item=$('input:radio[name="justify-content-opt"]:checked').val();
		$('.expt-box').css({'justify-content':item});
		
	});

	$('input[name="flex-dir-opt"]').change(function(){
		$('form#fb-flex-dir').submit(function(e) {
		  e.preventDefault();
		});
		var item=$('input:radio[name="flex-dir-opt"]:checked').val();
		$('.expt-box').css({'flex-direction':item});
		
	});

	$('input[name="flex-wrap-opt"]').change(function(){
		$('form#fb-flex-wrap').submit(function(e) {
		  e.preventDefault();
		});
		var item=$('input:radio[name="flex-wrap-opt"]:checked').val();
		$('.expt-box').css({'flex-wrap':item});
		
	});

	$('input[name="align-content-opt"]').change(function(){
		$('form#fb-align-content').submit(function(e) {
		  e.preventDefault();
		});
		var item=$('input:radio[name="align-content-opt"]:checked').val();
		$('.expt-box').css({'align-content':item});
		
	});

	
	

		


});
