(function() {

	angular
		.module("users")
		.controller("UserList", UserList);

	UserList.$inject = ["usersSrv"];

	function UserList(usersSrv) {
		let $ctrl = this;
		
		init();

		function init() {
			usersSrv.getData().then( (data) => $ctrl.users = data );
		}
	}

})();