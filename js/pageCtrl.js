angular
        .module('app')
        .controller('pageCtrl', ['$scope', '$location', '$route', '$http', function($scope, $location, $route, $http) {
                $scope.templates = {
                    "navBar": "templates/nav.html",
                    "sideBar": "templates/side_content.html"
                    //"mainContainer": "templates/main_container.html"
                };
                $scope.activePath = '/';
                $scope.$on('$routeChangeSuccess', function() {
                    $scope.activePath = $location.path();
                });
                
                $http({method: 'GET', url: '/latest_articles'}).
                    success(function(data, status, headers, config) {
                      $scope.articles = data.articles;
                    });
            }]);


