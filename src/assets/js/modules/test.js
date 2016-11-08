module.exports = test;

var slider = require('./slider')();

function test() {
    'use strict';

    var method = {};

    method.init = function() {

        method.ajaxTest();
    };



method.ajaxTest = function() {

    var tom = document.getElementById('buttonHolder');

    var apiKey = '3712852-edb0373b46785a73b59c6d352';

    var root = "https://pixabay.com/api/?key=" + apiKey + "&q=('pizza')" + "&lang=en" + "&orientation=horizontal" + "&min_width=500" + "&min_height=300" + "&userImageURL";

    // var img = $("<img />").attr('src', + hit.pageURL);

    // $('#buttonHolder').text(hit.webformatURL);
    $(document).ready(function(tom) {

        $.ajax({
            url: root,
            method: 'GET',

        }).then(function(data) {

            if (parseInt(data.totalHits) > 0) {

                for (var i = 0; i < data.hits.length; i++) {
                    data.hits[i].userImageURL;

                    	var photoHTML = '<div class="item' + '" class="image"><img src="' + data.hits[i].userImageURL + '"></div>';

		                    $('.slider').append(photoHTML);

                }

                slider.init();
            }
            else
            console.log('No hits');

        });
    });
};
     
	return method;

	}



  // 	var myModule = {
    // 		name: 'will',
    // 		age: 34,
    // 		sayName: function() {
    // 		console.log(this.name);
    // 		},
    // 		setName: function(newName) {
    // 			this.name = newName;
    // 		}
    // 	};
    // 		myModule.setName('adam');
    // 		myModule.sayName();
    // };


    	//     var people = {
	//         people: ['adam'],

	//         init: function() {

	//             this.cacheDom();
	//             this.render();

	//         },

	//         cacheDom: function() {
	//             this.$el = $('#peopleModule');
	//             this.$button = this.el.find('button');
	//             this.$input = this.$el.find('input');
	//             this.$ul = this.$el.find('ul');
	//             this.source = this.$el.find('#people-template').html();


	//         },

	            	      

	//         render: function() {

	//             var data = {
	//                 people: this.people,
	//             };

	//             this.$ul.find('ul').html(Handlebars.compile(this.source, data));
	//         }
	//     };

	    
	// };
