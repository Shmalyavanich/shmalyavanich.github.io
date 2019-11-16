(function() {
	"use strict";

	angular
		.module("users")
		.controller("Courses", Courses);

	Courses.$inject = ['$location', '$stateParams'];

	function Courses($location, $stateParams) {
		var $ctrl = this;

		console.log($stateParams);


	}

})();