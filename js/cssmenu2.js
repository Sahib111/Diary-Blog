function toggleCssMenu2(icon) { 
var cssmenu2 = document.getElementById('cssmenu2'); 
if (icon.className.indexOf('active') == -1) { icon.className = 'menu-icon2 active';
cssmenu2.style.display = "block";			
setTimeout(function(){cssmenu2.className = 'active';},0); } 
else { icon.className = 'menu-icon2';			
cssmenu.className = '';			
setTimeout(function(){cssmenu2.style.display = "none";},411); } }
