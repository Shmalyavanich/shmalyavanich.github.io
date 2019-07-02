(function() {

	angular
		.module("tasks")
		.controller("TaskList", TaskList);

	TaskList.$inject = ["tasksSrv"];
	
	function TaskList(tasksSrv) {
		console.log('controller');
		let $ctrl = this;

		init();

		function init() {
			$ctrl.tasks = tasksSrv.getAllTasks()
		}
	}

})();