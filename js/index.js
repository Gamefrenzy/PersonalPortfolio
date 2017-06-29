$(document).ready(function(){
    
    $(document).scroll(function(){
    	var top = $('#logoholder').offset().top;
	    var el = $('h1'),
	        top = $('#logoholder').offset().top - $(document).scrollTop();

	    if(top <= -44 && !$("#navbar").hasClass("expanded")){
	    	$("#navbar").animate({
		        right: '-=20%',
		        width: '+=20%'
    		}, "fast");
    		$("#navbar").addClass("expanded");
	    }
	    else if(top >= -44 && $("#navbar").hasClass("expanded"))
	    {
	    	$("#navbar").animate({
		        right: '+=20%',
		        width: '-=20%'
    		}, "fast");
    		$("#navbar").removeClass("expanded");
	    }
	    // if (top > 50 && el.is('.bg-black')){
	    //     $(el).removeClass('bg-black');
	    // }  
	});

	$(".nav, .navlink").click(function(){

		event.preventDefault();

    	if($(this).attr('id') == 'homenav' || $(this).attr('id') == 'homenavlink')
    	{
    		$('html,body').animate({scrollTop: $("#homesec").offset().top - 50}, "slow");
    	}
    	else if($(this).attr('id') == 'aboutnavlink' || $(this).attr('id') == 'aboutnav')
    	{
    		$('html,body').stop().animate({scrollTop: $("#aboutsec").offset().top - 50}, "slow");
    	}
    	else if($(this).attr('id') == 'portfolionavlink' || $(this).attr('id') == 'portfolionav')
    	{
    		$('html,body').animate({scrollTop: $("#portfoliosec").offset().top - 50}, "slow");
    	}
    	else if($(this).attr('id') == 'contactnavlink' || $(this).attr('id') == 'contactnav')
    	{
    		$('html,body').stop().animate({scrollTop: $("#contactsec").offset().top - 50}, "slow");
    	}

	});

	// $('a[href^="#"]').on('click', function(event) {
 //    var target = $(this.getAttribute('href'));
 //    if( target.length ) {
 //        event.preventDefault();
 //        $('html, body').stop().animate({
 //            scrollTop: target.offset().top
 //        }, 1000);
 //    }
// });

});