$(document).ready(function() {
$('.bar1').click(function() {
$('.bar').each(function() {
$('.bar').css('width','100%');
});
});
});

$(document).ready(function() {
$('.bar1').click(function() {
$('.yt').each(function() {
$('.yt').css('width','100%',);
});
});
});

$(document).ready(function() {
$('.bar').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(event) { 
$('.bar').fadeOut(3000);
$('.yt').fadeOut(3000);
});
});
