(function() {
	"use strict";

	angular
		.module("tasks")
		.factory("tasksSrv", tasksSrv);

	function tasksSrv() {
		var tasks = [
				{"id": "1", "action": "Estimate", "description": "Description of the task", "done": "false", "userId": "1", "userName": "Alan", "deadline": "2015-05-30", "priority": "1", "estimation": "3"}, 
				{"id": "2", "action": "Create...", "done": "false", "userId": "2", "userName": "Bella"}, 
				{"id": "3", "action": "Update...", "done": "false", "userId": "3", "userName": "Vardan"}, 
				{"id": "4", "action": "Delete...", "done": "false", "userId": "4", "userName": "Galiia"}, 
				{"id": "5", "action": "Deploy", "done": "false", "userId": "5", "userName": "Dmitriy"}
			];

		return {
			getAllTasks: getAllTasks,
			getTask: getTask,
			getUserTasks: getUserTasks,
			add: add,
			update: update
		};

		function getAllTasks() {
			return tasks;
		}

		function getTask(taskId) {
			return tasks.filter( function (task) {
				if (task.id === taskId) {
					return true;
				}
				else {
					return false;
				}
			})[0];
		}

		function getUserTasks(userId) {
			return tasks.filter( function (task) {
				if (task.userId == userId) {
					return true;
				}
				else {
					return false;
				}
			});
		}

		function add(taskToAdd) {
			tasks.push({
				action: taskToAdd.action,
				done: false,
				userName: taskToAdd.user.name,
				userId: taskToAdd.user.id
			});
		}

		function update(taskToUpdate) {
			var idx;

			tasks.forEach( function (task, index) {
				if (task === taskToUpdate) {
					idx = index;
				}
			});

			if (idx) {
				tasks[idx] = taskToUpdate;
			}
		}
	}

})();