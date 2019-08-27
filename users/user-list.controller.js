(function() {
	"use strict";

	angular
		.module("users")
		.controller("UserList", UserList);

	UserList.$inject = ["usersSrv", '$location'];

	function UserList(usersSrv, $location) {
		var $ctrl = this;

    $ctrl.changeLangState = changeLangState;

		init();

		function init() {
			usersSrv.getData().then( function (data) {$ctrl.users = data} );
		}


    $ctrl.langState = 'en';

    function changeLangState(langCode) {
      $ctrl.langState = langCode;
      $location.search('hl', langCode)
    }
	}

})();