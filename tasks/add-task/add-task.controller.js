(function() {

	angular
		.module("tasks")
		.controller("AddTask", AddTask);

	AddTask.$inject = ["tasksSrv", "usersSrv"];
	
	function AddTask(taskSrv, usersSrv) {
		let $ctrl = this;
		
		init();

		function init() {
			$ctrl.addNewTask = addNewTask;
			usersSrv.getData()
				.then((users) => { $ctrl.users = users });
		}

		function addNewTask(taskToAdd) {
			taskSrv.add(taskToAdd);
			taskToAdd.action = "";
			taskToAdd.user = "";
		}
	}

})();