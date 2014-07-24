angular
        .module('app')
        .controller('feedbackCtrl', ['$scope', '$http', function($scope, $http) {
                var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                $scope.$watch('email', function() {
                    if (regex_email.test($scope.email)) {
                        $scope.emailErr = undefined;
                        if ($scope.name !== "" && $scope.feedback !== "" 
                                && $scope.name !== undefined 
                                && $scope.feedback !== undefined) {
                            $scope.btn_disable = false;
                        } else {
                            $scope.btn_disable = true;
                        }
                    } else if ($scope.email === undefined) {
                        $scope.btn_disable = true;

                    } else {
                        $scope.emailErr = "Invalid email address!";
                        $scope.btn_disable = true;
                    }
                });

                $scope.$watch('name', function() {
                    if ($scope.name !== "" && $scope.feedback !== "" 
                            && regex_email.test($scope.email) 
                            && $scope.name !== undefined && $scope.feedback !== undefined) {
                        $scope.btn_disable = false;
                    } else {
                        $scope.btn_disable = true;
                    }
                });

                $scope.$watch('feedback', function() {
                    if ($scope.name !== "" && $scope.feedback !== "" 
                            && regex_email.test($scope.email) 
                            && $scope.name !== undefined && $scope.feedback !== undefined) {
                        $scope.btn_disable = false;
                    } else {
                        $scope.btn_disable = true;
                    }
                });


                $scope.submitFeedback = function() {
                    $(".spinner").show();
                    $http({method: 'POST', url: "/feedback", params: {name: $scope.name, email: $scope.email, feedback: $scope.feedback}}).
                            success(function(data, status, headers, config) {
                                $(".spinner").hide();
                                alert("✔ Feedback successfully submitted.");
                                $scope.name = undefined;
                                $scope.email = undefined;
                                $scope.feedback = undefined;
                            }).
                            error(function(data, status, headers, config) {
                                $(".spinner").hide();
                                alert("✘ Fail! Internal server error!");
                            });
                };
            }]);