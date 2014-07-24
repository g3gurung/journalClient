angular
        .module('app')
        .controller('tocCtrl', ['$scope', '$http', function($scope, $http) {
//                $http({method: 'GET', url: '/articles'}).
//                        success(function(data, status, headers, config) {
//                            $scope.articles = data;
//                            $http({method: 'GET', url: '/total_articles'}).
//                                success(function(data, status, headers, config) {
//                                    $scope.total_articles = data.count;
//                                });
//                        });
//                $scope.loadMoreArticles = function() {
//                    if ($scope.total_articles > $scope.articles.length) {
//                        $http({method: 'GET', url: '/articles', params: {curr_max_id: $scope.articles[$scope.articles.length - 1].id}}).
//                                success(function(data, status, headers, config) {
//                                    for (var i = 0; i < data.length; i++) {
//                                        $scope.articles.push(data[i]);
//                                    }
//                                });
//                    }
//                };
                    
                $http({method: 'GET', url: "/volumes"}).
                        success(function(data, status, headers, config){
                            $scope.volumes = data;
                      });
                      
                $scope.fetchArticles = function(vol) {
                    $http({method: 'GET', url: "/volumes/"+vol}).
                        success(function(data, status, headers, config){
                            $scope.articles = data.articles;
                      });
                };
                
            }]);