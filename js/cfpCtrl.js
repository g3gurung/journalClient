angular
  .module('app')
  .controller('cfpCtrl', ['$scope', 'CFP', function($scope, CFP) {
    CFP.get().then(function(data) {
      $scope.cfp = data;
    });
  }]);

