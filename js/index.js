$(document).ready(function() {
	event.preventDefault();
		
	$('#socialmedia li a').click(function( event){
		event.preventDefault();
	});

	$('#links a').click(function(event){
		event.prventDefult();
	$('#container article').slideDown(1000);
	});

	$('#links a').click(function(event){
		event.preventDefault(1000);
	$('#container article').slideUp();	

});

});