(function() {
	"use strict";

	angular
		.module("users")
		.controller("UserList", UserList);

	UserList.$inject = ["usersSrv", '$location'];

	function UserList(usersSrv, $location) {
		var $ctrl = this;

    $ctrl.changeLangState = changeLangState;

		init();

		function init() {
			usersSrv.getData().then( function (data) {$ctrl.users = data} );
		}

		var elementEn = document.createElement("link");
		elementEn.setAttribute("rel", "alternate");
		elementEn.setAttribute("hreflang", "en");
		elementEn.setAttribute("href", "https://shmalyavanich.github.io/#!/users");

		var elementRu = document.createElement("link");
		elementEn.setAttribute("rel", "alternate");
		elementEn.setAttribute("hreflang", "ru");
		elementEn.setAttribute("href", "https://shmalyavanich.github.io/#!/users?hl=ru");

		var elementUa = document.createElement("link");
		elementEn.setAttribute("rel", "alternate");
		elementEn.setAttribute("hreflang", "ua");
		elementEn.setAttribute("href", "https://shmalyavanich.github.io/#!/users?hl=ua");

		var head = document.querySelector("head");
		head.append(elementEn);
		head.append(elementRu);
		head.append(elementUa);

    $ctrl.langState = 'en';

    function changeLangState(langCode) {
      $ctrl.langState = langCode;

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