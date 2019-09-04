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
		var openGraph1 = document.createElement("meta");
		var openGraph2 = document.createElement("meta");
		var openGraph3 = document.createElement("meta");
		var openGraph4 = document.createElement("meta");
		
		openGraph1.setAttribute("property", "og:url");
		openGraph1.setAttribute("content", "https://shmalyavanich.github.io/#!/users");
		head.append(openGraph1);
		
		openGraph2.setAttribute("property", "og:title");
		openGraph2.setAttribute("content", "Special title for social sharing buttons!");
		head.append(openGraph2);
		
		openGraph3.setAttribute("property", "og:description");
		openGraph3.setAttribute("content", "Not so big, but useful description for social sharing buttons.");
		head.append(openGraph3);
		
		openGraph4.setAttribute("property", "og:image");
		openGraph4.setAttribute("content", "black-image.png");
		head.append(openGraph4);
	}

})();