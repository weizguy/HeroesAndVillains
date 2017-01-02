$(window).scroll(function () {
    if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 250px
        $('#return-to-top').fadeIn(200);    // Fade in hanging spidey
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out hanging spidey
    }
});

$(document).ready(function () {
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });
});

// hide scattered images if screen is small
$(document).ready(function () {
    if (screen.width < 500) {
        $('#quinn').css('visibility', 'hidden');
        $('#deadpool').css('visibility', 'hidden');
        $('#spidey').css('visibility', 'hidden');
        $('#cat').css('visibility', 'hidden');
    }
});