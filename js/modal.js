$(document).ready(function(){
$("#myfix-1").click(function(){
$.ajax({url: "./data/post-1.html", success: function(result){
$("#box-1").html(result);
}});
});
});

$(document).ready(function(){
$("#myfix-2").click(function(){
$.ajax({url: "./data/post-2.html", success: function(result){
$("#box-2").html(result);
}});
});
});
