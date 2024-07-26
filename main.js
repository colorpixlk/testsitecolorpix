$('#portfolioCarousel').carousel({
    interval: false
});

// Enable swiping on the carousel
$('#portfolioCarousel').on('touchstart', function(event) {
    var yClick = event.originalEvent.touches[0].pageY;
    $(this).one('touchmove', function(event) {
        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $('.carousel').carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $('.carousel').carousel('prev');
        }
    });
    $('.carousel').on('touchend', function(){
        $(this).off('touchmove');
    });
});

// JavaScript to handle additional functionality (optional)
document.querySelector('.whatsapp-button').addEventListener('click', function() {
    // Add any additional functionality here
    console.log('WhatsApp button clicked!');
});

