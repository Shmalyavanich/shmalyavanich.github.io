(function() {
  "use strict";

  angular
    .module("users")
    .controller("Courses", Sitemap);

  Sitemap.$inject = ['$location', '$stateParams', '$scope'];

  function Sitemap($location, $stateParams, $scope) {
    var $ctrl = this;

    $ctrl.data = '';

    var x2js = new X2JS();
    exampleSvc.getExternalXml().success(function(data){
      // part to convert xml to json
      var json = x2js.xml_str2json(data);
    });

  }

})();