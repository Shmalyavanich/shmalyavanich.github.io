(function() {
	"use strict";

	angular
		.module("users")
		.controller("UserList", UserList);

	UserList.$inject = ["usersSrv"];

	function UserList(usersSrv) {
		var $ctrl = this;
		
		init();

		function init() {
			usersSrv.getData().then( function (data) {$ctrl.users = data} );
		}
	}

})();