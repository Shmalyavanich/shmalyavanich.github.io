(function() {
  "use strict";

  angular
    .module("users")
    .factory("usersSrv", sitemapService);

  sitemapService.$inject = ["$http"];

  function sitemapService($http) {
    function getExternalXml() {
      return $http.get("sitemap-old-version.xml");
    }

    return {
      getExternalXml: getExternalXml
    };
  }

})();