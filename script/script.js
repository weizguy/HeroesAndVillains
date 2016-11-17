
$(window).scroll(function () {
    if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$(document).ready(function () {
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });
});