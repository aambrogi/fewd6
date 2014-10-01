 $(document).ready(function() {
    $('a#people').click(function() {
    	$('ul#filter li a').css("border", "none").css("padding", "6px");
    	$('a#people').css("border", "2px solid black").css("padding","4px");
    	$('img').fadeOut(700);
     	$('.people').delay(700).fadeIn(700);
    });

    $('a#events').click(function() {
        $('ul#filter li a').css("border", "none").css("padding", "6px");
    	$('a#events').css("border", "2px solid black").css("padding","4px");
        $('img').fadeOut(700);
     	$('.events').delay(700).fadeIn(700);
    });

    $('a#all').click(function() {
        $('ul#filter li a').css("border", "none").css("padding", "6px");
    	$('a#all').css("border", "2px solid black").css("padding","4px");
    	$('img:visible').fadeOut(700).fadeIn(700);
    	$('img:hidden').delay(700).fadeIn(700);


    });

});
