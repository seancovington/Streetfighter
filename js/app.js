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
            console.log('mousedown');
            // play hadouken sound
            // show hadouken and animate it to the right of the screen
        })
        .mouseup(function () {
            console.log('mouseup');
            // ryu goes back to his ready position
        });
});