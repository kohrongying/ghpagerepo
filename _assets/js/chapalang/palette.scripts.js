$(document).ready(function() {
	console.log("letsgo!");
	
	var clipboard = new Clipboard('.box');

	clipboard.on('success', function(e) {
	    console.info('Action:', e.action);
	    console.info('Text:', e.text);
	    console.info('Trigger:', e.trigger);

	    e.clearSelection();
	});

	clipboard.on('error', function(e) {
	    console.error('Action:', e.action);
	    console.error('Trigger:', e.trigger);
	});

	var choice=$('input:radio[name="optradio"]:checked').val();
		$('#radiobtn-ans').text(choice);
		//console.log(choice);

		//To set the colour and text of each colour, based on id tag in HTML 
		$('.box').each(function(){
			var color;
			//console.log(choice);
			if (choice=='rgb'){
				color=hexToRGB(this.id);
			} else {
				color='#'+this.id;
			}
			//console.log(color);
			$(this).css({'background':color});
			$(this).text(color);
		})


	//To get the Radio Button Value
	$('input[name="optradio"]').change(function(){
		
		$('form#rgb-or-hex').submit(function(e) {
		  e.preventDefault();
		});

		var choice=$('input:radio[name="optradio"]:checked').val();
		$('#radiobtn-ans').text(choice);
		//console.log(choice);

		//To set the colour and text of each colour, based on id tag in HTML 
		$('.box').each(function(){
			var color;
			//console.log(choice);
			if (choice=='rgb'){
				color=hexToRGB(this.id);
			} else {
				color='#'+this.id;
			}
			//console.log(color);
			$(this).css({'background':color});
			$(this).text(color);
		})

		
	})

	$('.box').click(function(){
		var copiedColor = $(this).text();
		$(this).attr({
			'data-clipboard-text':copiedColor
		});
	});
	//function to change Hex to RGB. ID is given in hex
	function hexToRGB(hex){
		var r=hex.substring(0,2);
		var g=hex.substring(2,4);
		var b=hex.substring(4,6);

		r = parseInt(r.charAt(1),16)+parseInt(r.charAt(0),16)*16;
		g = parseInt(g.charAt(1),16)+parseInt(g.charAt(0),16)*16;
		b = parseInt(b.charAt(1),16)+parseInt(b.charAt(0),16)*16;

		var toReturn='rgba('+r+','+g+','+b+',1)'

		return toReturn;	
	}

	//console.log(hexToRGB('FF0000'));


});
