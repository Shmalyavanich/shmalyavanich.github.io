(function() {
	"use strict";

	angular
		.module("userTasks")
		.controller("UserTaskList", UserTaskList);

	function UserTaskList() {
		$scope.langState = 'en';


		function changeLangState(langCode) {
			$scope.langState = langCode;
		}
	}

})();