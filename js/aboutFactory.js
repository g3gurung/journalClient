angular
  .module('app')
  .factory('About', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('json/about.json').then(function(response) {
          return response.data;
        });
      }
    };
  }]);