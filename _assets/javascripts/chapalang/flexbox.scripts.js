$(document).ready(function() {
	
	$('input[name="align-items-opt"]').change(function(){
		$('form#fb-align-items').submit(function(e) {
		  e.preventDefault();
		});
		let item=$('input:radio[name="align-items-opt"]:checked').val();
		if (item=='none'){
			$('.expt-box').css("align-items","");
			$('.display-col span#align-items').html("");
		} else {
			$('.expt-box').css({'align-items':item});
			let cssProperty = '<span>align-items: '+item+';</span>';
			$('.display-col span#align-items').html(cssProperty);
		}

	});

	$('input[name="justify-content-opt"]').change(function(){
		$('form#fb-justify-content').submit(function(e) {
		  e.preventDefault();
		});
		let item=$('input:radio[name="justify-content-opt"]:checked').val();
		if (item=='none'){
			$('.expt-box').css("justify-content","");
			$('.display-col span#justify-content').html("");
		} else {
			$('.expt-box').css({'justify-content':item});
			let cssProperty = '<span>justify-content: '+item+';</span>';
			$('.display-col span#justify-content').html(cssProperty);
		}
		
		
	});

	$('input[name="flex-dir-opt"]').change(function(){
		$('form#fb-flex-dir').submit(function(e) {
		  e.preventDefault();
		});
		let item=$('input:radio[name="flex-dir-opt"]:checked').val();
		if (item=='none'){
			$('.expt-box').css("flex-direction","");
			$('.display-col span#flex-direction').html("");
		} else {
			$('.expt-box').css({'flex-direction':item});
			let cssProperty = '<span>flex-direction: '+item+';</span>';
			$('.display-col span#flex-direction').html(cssProperty);
		}

		
	});

	$('input[name="flex-wrap-opt"]').change(function(){
		$('form#fb-flex-wrap').submit(function(e) {
		  e.preventDefault();
		});
		let item=$('input:radio[name="flex-wrap-opt"]:checked').val();
		if (item=='none'){
			$('.expt-box').css("flex-wrap","");
			$('.display-col span#flex-wrap').html("");
		} else {
			let cssProperty = '<span>flex-wrap: '+item+';</span>';
			$('.expt-box').css({'flex-wrap':item});
			$('.display-col span#flex-wrap').html(cssProperty);
		}

		
	});

	$('input[name="align-content-opt"]').change(function(){
		$('form#fb-align-content').submit(function(e) {
		  e.preventDefault();
		});
		let item=$('input:radio[name="align-content-opt"]:checked').val();
		if (item=='none'){
			$('.expt-box').css("align-content","");
			$('.display-col span#align-content').html("");
		} else {
			let cssProperty = '<span>align-content: '+item+';</span>';
			$('.expt-box').css({'align-content':item});
			$('.display-col span#align-content').html(cssProperty);
		}
		

	});

	
});
