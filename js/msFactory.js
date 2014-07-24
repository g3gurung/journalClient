angular
  .module('app')
  .factory('MS', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('json/manuscript_submission.json').then(function(response) {
          return response.data;
        });
      }
    };
  }]);