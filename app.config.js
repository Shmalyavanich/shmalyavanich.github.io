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
      })
      .state("courses", {
        url: "/courses/:id",
        templateUrl: "courses/courses.html",
        controller: "Courses",
        controllerAs: "$ctrl"
      })
      .state("sitemap", {
        url: "/sitemap",
        controller: "Sitemap"
      });

	}

	
	function runApp() {
	}
})();