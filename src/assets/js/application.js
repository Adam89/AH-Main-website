// Vendor
global.jQuery = require('jquery');
global.$ = jQuery;

require('./libs/slick.js');

// Modules
var nav = require('./modules/nav')();
// var slider = require('./modules/slider')();
var test = require('./modules/test')();

// Bootstrapping
$(function() {

    "use strict";

    nav.init();
    // slider.init();
    test.init();

});

