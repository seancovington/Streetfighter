$(document).ready(function () {
    $('.ryu').mouseenter(function () {
        $('.ryu-still').hide();
        $('.ryu-ready').show();;
    })
    $('.ryu').mouseleave(function () {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    $('.ryu').mousedown(function () {
        // play hadouken sound
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show().animate({
                'left': '1020px'
            },
            500,
            function () {
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            }
        );
        $('.ryu').mouseup(function () {

            $('.ryu-throwing').hide();
            $('.ryu-ready').show();

        })
    });
});