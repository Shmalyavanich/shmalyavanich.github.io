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
		
		var tags = document.querySelectorAll('meta[property*="og:"]');

		[].map.call(tags, function(tag) {
			tag.remove();
		});
	  
		//<meta property="og:url" content="https://shmalyavanich.github.io/#!/users">
		//<meta property="og:title" content="Special title for social sharing buttons!">
		//<meta property="og:description" content="Not so big, but useful description for social sharing buttons.">
		var openGraph1 = document.createElement("meta");
		var openGraph2 = document.createElement("meta");
		var openGraph3 = document.createElement("meta");
		var openGraph4 = document.createElement("meta");
		
		openGraph1.setAttribute("property", "og:url");
		openGraph1.setAttribute("content", "https://shmalyavanich.github.io/#!/testUrl");
		head.append(openGraph1);
		
		openGraph2.setAttribute("property", "og:title");
		openGraph2.setAttribute("content", "social btn title");
		head.append(openGraph2);
		
		openGraph3.setAttribute("property", "og:description");
		openGraph3.setAttribute("content", "social btn description");
		head.append(openGraph3);
		
		openGraph4.setAttribute("property", "og:image");
		openGraph4.setAttribute("content", "black-image.png");
		head.append(openGraph4);
		
		//<meta name="twitter:card" content="summary">
		//<meta name="twitter:title" content="Twitter! Special title for social sharing buttons!">
		//<meta name="twitter:description" content="Twitter! Not so big, but useful description for social sharing buttons.">
		//<meta name="twitter:image" content="https://shmalyavanich.github.io/black-image.png">
		var twitterCard1 = document.createElement("meta");
		var twitterCard2 = document.createElement("meta");
		var twitterCard3 = document.createElement("meta");
		var twitterCard4 = document.createElement("meta");
		
		twitterCard1.setAttribute("name", "twitter:url");
		twitterCard1.setAttribute("content", "https://shmalyavanich.github.io/#!/testUrl");
		head.append(twitterCard1);
		
		twitterCard2.setAttribute("name", "twitter:title");
		twitterCard2.setAttribute("content", "social btn title");
		head.append(twitterCard2);
		
		twitterCard3.setAttribute("name", "twitter:description");
		twitterCard3.setAttribute("content", "social btn description");
		head.append(twitterCard3);
		
		twitterCard4.setAttribute("name", "twitter:image");
		twitterCard4.setAttribute("content", "black-image.png");
		head.append(twitterCard4);
		
		
		var canonical = document.createElement("link");
		canonical.setAttribute("rel", "canonical");
		canonical.setAttribute("href", "https://shmalyavanich.github.io/#!/");

		head.append(canonical);
		
		
		
		var pageUrlParts = window.location.href.split('?');
		var vkLink = 'http://vk.com/share.php?url=' + pageUrlParts[0] + '&title=Тест%20"Кто%20ты%20в%20IT%3F"&image=https://shmalyavanich.github.io/black-image.png'
		var vkSocialBtn = document.createElement("a");
		vkSocialBtn.setAttribute("href", socialLink);
		vkSocialBtn.setAttribute("target", "_blank");
		vkSocialBtn.setAttribute("style", "margin-right: 30px;");
		
		var socials = document.querySelector("#socials");
		socials.append(vkSocialBtn);
	}

})();