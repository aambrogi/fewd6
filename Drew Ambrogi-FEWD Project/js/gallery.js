 
//This script is very much not DRY. I think there is probably a way to simply it by defining some global functions, but I am not exactly sure how to execute that. 
//I'm also curious about how I would write this script to work with a much larger number of filter categories. Is there a way for me to have the script "read"
//the contents of the <a> on the filter to know what class of photos to hide or show? I couldn't figure this out on my own...

//Basic setup of the page: there is  a horizontal image gallery with a sidebar that contains clickable filters. When the filters are clicked, the corresponding
//category of pictures is displayed. 


 $(document).ready(function() {

    $("#sub-list").hide(); //Hides sub-categories under "events" filter on page load

    $('a#people').click(function() {
    	$('ul#filter li a').removeClass("selected"); //Resets all li's in sidebar (li#filter) so that none are styled as selected 
    	$('ul#sub-list li a').removeClass("selected"); //Resets li's in sub ul
    	$('ul#sub-list').fadeOut(400); //Ensures that Sub-list has been hidden (no effect if it has not been unhidden)
    	$('a#people').addClass("selected"); //Adds selected class to #people, the clicked filter
    	$('img').fadeOut(700); //Fades out all images in the gallery
     	$('.people').delay(700).fadeIn(700); //Delay ensures that the transition is smoothe and the .people images don't fade in untill the gallery is clear of other images
    });

    $('a#events').click(function() {
    	$('ul#filter li a').removeClass("selected");
    	$('ul#sub-list li a').removeClass("selected");
    	$('a#events').addClass("selected");
    	$('ul#sub-list').fadeIn(400);
    	$('img').fadeOut(700);
     	$('.events').delay(700).fadeIn(700);
    });

    $('a#politics').click(function() {
    	$('ul#filter li a').removeClass("selected");
    	$('ul#sub-list li a').removeClass("selected");
    	$('a#politics').addClass("selected");
    	$('img').fadeOut(700);
    	$('.politics').delay(700).fadeIn(700);
    });

    $('a#nightlife').click(function() {
    	$('ul#filter li a').removeClass("selected");
    	$('ul#sub-list li a').removeClass("selected");
    	$('a#nightlife').addClass("selected");
    	$('img').fadeOut(700);
    	$('.nightlife').delay(700).fadeIn(700);
    });


    $('a#places').click(function() {
    	$('ul#filter li a').removeClass("selected");
    	$('ul#sub-list li a').removeClass("selected");
    	$('ul#sub-list').fadeOut(400);
    	$('a#places').addClass("selected");
    	$('img').fadeOut(700);
     	$('.places').delay(700).fadeIn(700);
    });

    $('a#all').click(function() {
    	$('ul#filter li a').removeClass("selected");
    	$('ul#sub-list li a').removeClass("selected");
    	$('ul#sub-list').fadeOut(400);
    	$('a#all').addClass("selected");
    	$('img:visible').fadeOut(700).fadeIn(700); //fades out all visible images
    	$('img:hidden').delay(700).fadeIn(700); //since all images have been hidden at this point, this fades all of the images back in simultaneously
    });

});


