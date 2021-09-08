$(document).ready(function() {
$('.bar1').click(function() {
$('.bar').css('width','90%');
$('.yt').css('width','90%',);
});
});

$(document).ready(function() { 
$('div').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(event) { 
$('.bar').css('display','none');
$('.yt').css('display','none',);
});
});
