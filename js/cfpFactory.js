angular
  .module('app')
  .factory('CFP', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('json/call_for_papers.json').then(function(response) {
          return response.data;
        });
      }
    };
  }]);


