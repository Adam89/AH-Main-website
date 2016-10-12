module.exports = test;

function test() {
    'use strict';

    var method = {};

    method.init = function() {

        method.functionTest();
    };



	method.functionTest = function() {

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


		function greet() {
			console.log('hi');
		}
		greet.language = 'english'

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
