$(document).ready(function() {
$('.bar1').click(function() {
$('.bar').each(function() {
$('.yt').each(function() {
$('.bar').css('width','98%');
$('.yt').css('width','98%',);
$('.bar').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(event) { 
$('.bar').css('display','none');
$('.yt').css('display','none');
});
});
});
});
});
