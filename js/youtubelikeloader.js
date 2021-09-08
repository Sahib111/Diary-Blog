$(document).ready(function() {
$('.bar1').click(function() {
$('.bar').css('width','90%');
$('.yt').css('width','90%',);
});
});

$(document).ready(function() { 
$('.bar').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(event) { 
$('.bar').css('width','0%');
$('.yt').css('width','0%',);
});
});
