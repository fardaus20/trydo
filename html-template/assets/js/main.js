

$(document).ready(function(){
/* sticky navbar onscroll*/

$(window).on("scroll",function() {
        if ($(this).scrollTop() > 20) {
            $('.header-top-content').addClass("navbar-fixed-top");
        }
        else {
            $('.header-top-content').removeClass("navbar-fixed-top");
        }
    });







});