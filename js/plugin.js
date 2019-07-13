var navbar = document.getElementById("template-nav").innerHTML;
var header = document.getElementById("template-header").innerHTML;
var content = document.getElementById("template-content").innerHTML;
var footer = document.getElementById("template-footer").innerHTML;
var pluginControls = document.getElementById("template-plugin-controls").innerHTML;
/*
var jquerySrc = document.createElement('script');
var bootstrapSrc = document.createElement('script');
var easingSrc = document.createElement('script');
var scrollingSrc = document.createElement('script'); */
var changeStyleSrc = document.createElement('script');

/*
jquerySrc.setAttribute("src","/vendor/jquery/jquery.min.js");
bootstrapSrc.setAttribute("src","/vendor/bootstrap/js/bootstrap.bundle.min.js");
easingSrc.setAttribute("src","/vendor/jquery-easing/jquery.easing.min.js");
scrollingSrc.setAttribute("src","/js/scrolling-nav.js"); */
changeStyleSrc.setAttribute("src","/js/change-style.js");

document.body.innerHTML = navbar + header + content + footer + pluginControls;
/*
document.body.appendChild(jquerySrc);
document.body.appendChild(bootstrapSrc);
document.body.appendChild(easingSrc);
document.body.appendChild(scrollingSrc); */
document.body.appendChild(changeStyleSrc);

