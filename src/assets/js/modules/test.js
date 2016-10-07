module.exports = test;

function test() {
    'use strict';

    var method = {};

    method.init = function() {

        method.functionTest(9,8);
    };


    method.functionTest = function(width,height) {

        console.log( width * height);

    };



    return method;

}
