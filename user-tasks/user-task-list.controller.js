(function() {
	"use strict";

	angular
		.module("userTasks")
		.controller("UserTaskList", UserTaskList);

	function UserTaskList() {
		$scope.langState = 'en';
		$scope.changeLangState = changeLangState;


		function changeLangState(langCode) {
			$scope.langState = langCode;
		}
	}

})();