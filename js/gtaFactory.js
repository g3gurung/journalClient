angular
  .module('app')
  .factory('GTA', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('json/guide_to_authors.json').then(function(response) {
          return response.data;
        });
      }
    };
  }]);