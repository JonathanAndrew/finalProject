$(document).ready(function() {
	

//options( 1 - ON , 0 - OFF)  
        var auto_slide = 1;  
            var hover_pause = 1;  
        var key_slide = 1;  
  
        //speed of auto slide(  
        var auto_slide_seconds = 5000;  
        /* IMPORTANT: i know the variable is called ...seconds but it's 
        in milliseconds ( multiplied with 1000) '*/


  $( ".hamburger" ).click(function() {


    $( ".links" ).slideToggle( "slow", function() {

    });

  });

$('.links .about').click(function( event ) {
	event.preventDefault();
	$('.aboutMeBox').slideToggle('#container');
  $('.resumeBox').hide();
  $('.portfolioBox').hide();
});

$('.links .resume').click(function( event ) {
	event.preventDefault();
	$('#container.background.resumeBox').slideToggle();
	$('.aboutMeBox').hide();
	$('.portfolioBox').hide();
});

$('.links .portfolio').click(function( event ) {
	event.preventDefault();
	$('#container.portfolioBox').slideToggle();
	$('.resumeBox').hide();
	$('.aboutMeBox').hide();

});

$('ul#menu li ul.sub-menu li a').click(function(){
	event.preventDefault();
	$('.slider').hide();
	$('#slider img ').show();
})


// settings
  var $slider = $('.slider'); // class or id of carousel slider
  var $slide = 'li'; // could also use 'img' if you're not using a ul
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 1000; // 4 seconds

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );

 $('#abstract').click(function( event ) {
	event.preventDefault();
	$('#conatiner').hide();
	

});



});
