$(document).ready(function() {
$('.bar1').click(function() {
$('.bar').css('width','90%');
$('.yt').css('width','90%',);
$('.bar').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(event) { 
$('.bar').css('display','none');
$('.yt').css('display','none');
});
});
});
