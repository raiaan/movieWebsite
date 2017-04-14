/// <reference path="jquery-3.1.1.js" />
// reference the intellisence of Jquery 
$(document).ready(function () {
    $('.burger-nav').on('click', function () {
        $('header nav ul').toggleClass('open'); 
    }); 
});