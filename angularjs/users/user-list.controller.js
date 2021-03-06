(function() {
	"use strict";

	angular
		.module("users")
		.controller("UserList", UserList);

	UserList.$inject = ["usersSrv", '$location', '$state'];

	function UserList(usersSrv, $location, $state) {
		var $ctrl = this;

    $ctrl.changeLangState = changeLangState;

		init();

		function init() {
			// usersSrv.getData().then( function (data) {$ctrl.users = data} );
		}

		var elementEn = document.createElement("link");
		elementEn.setAttribute("rel", "alternate");
		elementEn.setAttribute("hreflang", "en");
		elementEn.setAttribute("href", "https://shmalyavanich.github.io/#!/users");

		var elementRu = document.createElement("link");
		elementRu.setAttribute("rel", "alternate");
		elementRu.setAttribute("hreflang", "ru");
		elementRu.setAttribute("href", "https://shmalyavanich.github.io/#!/users?hl=ru");

		var elementUa = document.createElement("link");
		elementUa.setAttribute("rel", "alternate");
		elementUa.setAttribute("hreflang", "ua");
		elementUa.setAttribute("href", "https://shmalyavanich.github.io/#!/users?hl=ua");
		
		var canonical = document.createElement("link");
		canonical.setAttribute("rel", "canonical");
		canonical.setAttribute("href", "https://shmalyavanich.github.io/#!/users");

		var head = document.querySelector("head");
		head.append(elementEn);
		head.append(elementRu);
		head.append(elementUa);
		head.append(canonical);
		
		var description = document.createElement("meta");
		description.setAttribute("name", "description");
		description.setAttribute("content", "Some description of users page");
		
		var keywords = document.createElement("meta");
		keywords.setAttribute("name", "keywords");
		keywords.setAttribute("content", "users keyword, users, some little user");
		
		head.append(description);
		head.append(keywords);


	$ctrl.langState = $location.search().hl || 'en';
	console.log($ctrl.langState );

    if(isSearchRobot()) {
		$ctrl.langState = 'ru';
		$location.search('hl', 'ru');

		// window.location.href = 'https://shmalyavanich.github.io/angularjs/#!/users?hl=ru';
	} else {
		$ctrl.langState = 'ru';
		$location.search('hl', 'ua');
		$ctrl.langState = 'ua';
		// window.location.href = 'https://shmalyavanich.github.io/angularjs/#!/users?hl=ua';
	}



	function isSearchRobot() {
		var userAgent = window.navigator.userAgent.toLowerCase();

		return userAgent.includes('googlebot') || userAgent.includes('yandexmobilebot') || userAgent.includes('yandexbot');
	}


		function changeLangState(langCode) {
      $ctrl.langState = langCode;
			var html = document.querySelector("html");
			html.setAttribute("lang", langCode);

			switch (langCode) {
				case 'en':
					window.document.title = 'List of users in English';
					$location.search('hl', null);
					break;
				case 'ru':
					window.document.title = 'Список пользователей на русском языке';
					$location.search('hl', langCode);
					break;
				case 'ua':
					window.document.title = 'Список користувачів українською мовою';
					$location.search('hl', langCode);
					break;
			}
    }
	}

})();