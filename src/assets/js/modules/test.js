module.exports = test;

function test() {
    'use strict';

    var method = {};

    method.init = function() {

        method.ajaxTest();
    };



	method.ajaxTest = function() {

		// var person = {

		// 	firstname: 'adam', 
		// 	lastname: 'hopkins',
		// 	address: {
		// 		street: '23 frome road',
		// 		city: 'london',
		// 		state: 'haringey'
		// 	}

		// };

		// function greet(person) {
		// 	console.log('hi' + person.firstname);
		// }

		// console.log(person);

// var tom = document.getElementById('getData');

// var root = 'http://jsonplaceholder.typicode.com';

// $(tom).click(function(event) {
//     $.ajax({
//         url: root + '/posts/',
//         method: 'GET'
//     }).then(function(data) {

//         for (var i = 0; i < data.length; i++) {
//             console.log(data[i].title);

//             var adam = '<div style="width: 100%; background: black; color: #fff; text-align:center; padding: 10px; max-width: 960px; margin: auto; "><span>' + data[i].title + '"</div></div>';

//             $('#lists').css('display:block');
//             $('#lists').append(adam);
//         }
//     });
// });
};



//     
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
