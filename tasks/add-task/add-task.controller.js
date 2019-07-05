(function() {
	"use strict";

	angular
		.module("tasks")
		.controller("AddTask", AddTask);

	AddTask.$inject = ["tasksSrv", "usersSrv"];
	
	function AddTask(taskSrv, usersSrv) {
		var $ctrl = this;
		
		init();

		function init() {
			$ctrl.addNewTask = addNewTask;
			usersSrv.getData()
				.then(function (users) { $ctrl.users = users });
		}

		function addNewTask(taskToAdd) {
			taskSrv.add(taskToAdd);
			taskToAdd.action = "";
			taskToAdd.user = "";
		}
	}

})();