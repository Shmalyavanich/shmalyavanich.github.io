(function() {

	angular
		.module("app")
		.config(configAppRouter)
		.run(runApp);

	function configAppRouter($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");


    $stateProvider
      .state("home", {
        url: "/",
        template: "<task-list></task-list>",
      })
      .state("users", {
        url: "/users",
        templateUrl: "users/user-list.html",
        controller: "UserList",
        controllerAs: "$ctrl",
      })
      .state("addTask", {
        url: "/addTask",
        template: "<add-task></add-task>",
      });
	}

	
	function runApp() {
		
	}
})();