$(document).ready(function() {
    $('#btnMenu').click(function() {
        $('#nav').toggleClass('hide');
    });

    $('#nav').children().click(function(e) {
        e.preventDefault();
        $('#container').fadeOut(1500, function() {
            window.location.href = $(e.target).attr('href');
        });
    });
});
