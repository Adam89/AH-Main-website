module.exports = nav;

function nav() {
    'use strict';

    var method = {};

    method.init = function() {

        method.openNav();
        method.closeNav();
    };


    method.openNav = function() {

        $(".menu").click(function() {
            document.getElementById("myNav").style.width = "100%";
        });
    };


    method.closeNav = function() {
        $(".closebtn").click(function() {
            document.getElementById("myNav").style.width = "0%";
        });
    };




    return method;

}
