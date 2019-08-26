(function() {
	"use strict";

	angular
		.module("tasks")
		.controller("TaskList", TaskList);

	TaskList.$inject = ["tasksSrv"];
	
	function TaskList(tasksSrv) {
		var $ctrl = this;

		$ctrl.changeLangState = changeLangState;

		console.log('controller');


		init();

		function init() {
			$ctrl.tasks = tasksSrv.getAllTasks()
		}

		$ctrl.langState = 'en';

		function changeLangState(langCode) {
			console.log('test');
			console.log(langCode);
			$ctrl.langState = langCode;
		}
	}

})();