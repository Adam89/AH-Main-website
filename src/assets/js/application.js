// Vendor
global.jQuery = require('jquery');
global.$ = jQuery;

require('./libs/slick.js');

// Modules
var nav = require('./modules/nav')();
var slider = require('./modules/slider')();

// Bootstrapping
$(function() {

    "use strict";

    nav.init();
    slider.init();

});