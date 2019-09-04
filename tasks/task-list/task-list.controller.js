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
		elementRu.setAttribute("rel", "alternate");
		elementRu.setAttribute("hreflang", "ru");
		elementRu.setAttribute("href", "https://shmalyavanich.github.io/#!/");

		var elementUa = document.createElement("link");
		elementUa.setAttribute("rel", "alternate");
		elementUa.setAttribute("hreflang", "ua");
		elementUa.setAttribute("href", "https://shmalyavanich.github.io/#!/");

		var head = document.querySelector("head");
		head.append(elementEn);
		head.append(elementRu);
		head.append(elementUa);
		
		//<meta property="og:url" content="https://shmalyavanich.github.io/#!/users">
		//<meta property="og:title" content="Special title for social sharing buttons!">
		//<meta property="og:description" content="Not so big, but useful description for social sharing buttons.">
		var openGraph = document.createElement("meta");
		
		openGraph.setAttribute("property", "og:url");
		openGraph.setAttribute("content", "https://shmalyavanich.github.io/#!/users");
		head.append(openGraph);
		
		openGraph.setAttribute("property", "og:title");
		openGraph.setAttribute("content", "Special title for social sharing buttons!");
		head.append(openGraph);
		
		openGraph.setAttribute("property", "og:description");
		openGraph.setAttribute("content", "Not so big, but useful description for social sharing buttons.");
		head.append(openGraph);
		
		openGraph.setAttribute("property", "og:image");
		openGraph.setAttribute("content", "black-image.png");
		head.append(openGraph);
	}

})();