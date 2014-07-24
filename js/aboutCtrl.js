angular
  .module('app')
  .controller('aboutCtrl', ['$scope', 'About', function($scope, About) {
    About.get().then(function(data) {
      $scope.about = data;
    });
  }]);


