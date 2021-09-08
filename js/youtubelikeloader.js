$(document).ready(function() {
$('.bar1').click(function() {
$('.bar').css('width','98%');
$('.yt').css('width','98%',);
$('.bar').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(event) { 
$('.bar').css('transition','none');
$('.yt').css('transition','none');
});
});
});
});
});
