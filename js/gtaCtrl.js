angular
  .module('app')
  .controller('gtaCtrl', ['$scope', 'GTA', function($scope, GTA) {
    GTA.get().then(function(data) {
      $scope.gta = data;
    });
  }]);