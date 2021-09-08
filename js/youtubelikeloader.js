$(document).ready(function() {
$('.bar1').click(function() {
$('.bar').each(function() {
$('.bar').css('width','100%');
$('.yt').each(function() {
$('.yt').css('width','100%',);
$('.bar').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(event) { 
$('.bar').css('display','none');
$('.yt').css('display','none');
});
});
});
});
});
