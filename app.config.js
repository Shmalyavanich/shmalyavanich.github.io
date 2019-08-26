(function() {
  "use strict";

	angular
		.module("app")
		.config(configAppRouter)
		.run(runApp);

	function configAppRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.hashPrefix('');

		$urlRouterProvider.otherwise("/");


    $stateProvider
      .state("home", {
        url: "/",
        template: "<task-list></task-list>"
      })
      .state("users", {
        url: "/users",
        templateUrl: "users/user-list.html",
        controller: "UserList",
        controllerAs: "$ctrl"
      })
      .state("addTask", {
        url: "/addTask",
        template: "<add-task></add-task>"
      });

	}

	
	function runApp() {
    $scope.langState = 'en';
    $scope.changeLangState = changeLangState;

    function changeLangState(langCode) {
      $scope.langState = langCode;
    }
	}
})();