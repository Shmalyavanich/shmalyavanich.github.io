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
			$ctrl.langState = langCode;
		}

		var elementEn = document.createElement("link");
		elementEn.setAttribute("rel", "alternate");
		elementEn.setAttribute("hreflang", "en");
		elementEn.setAttribute("href", "https://shmalyavanich.github.io/#!/");

		var elementRu = document.createElement("link");
		elementEn.setAttribute("rel", "alternate");
		elementEn.setAttribute("hreflang", "ru");
		elementEn.setAttribute("href", "https://shmalyavanich.github.io/#!/");

		var elementUa = document.createElement("link");
		elementEn.setAttribute("rel", "alternate");
		elementEn.setAttribute("hreflang", "ua");
		elementEn.setAttribute("href", "https://shmalyavanich.github.io/#!/");

		var head = document.querySelector("head");
		head.append(elementEn);
		head.append(elementRu);
		head.append(elementUa);
	}

})();