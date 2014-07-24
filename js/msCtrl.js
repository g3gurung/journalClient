angular
        .module('app')
        .controller('msCtrl', ['$scope', 'MS', function($scope, MS) {
                MS.get().then(function(data) {
                    $scope.ms = data;
                    $scope.invalid = true;
                });
                $scope.files = [];
                var fieldNames = [
                    "manuscript", "cover_letter", "supplementary"
                ];
                $scope.setFiles = function(element) {
                    if (element.files[0].type.search("image") > -1
                            || element.files[0].type.search("pdf") > -1
                            || element.files[0].type.search("doc") > -1) {
                        $scope.$apply(function($scope) {
                            if ($('#msFile').val() !== "" && $('#clFile').val() !== ""
                                    && $('#email').val() !== "" && $('#name').val() !== "" && !$scope.emailInvalid) {
                                $scope.invalid = false;
                            } else {
                                $scope.invalid = true;
                            }
                            ;
                            $scope.files[element.dataset.index] = element.files[0];
                        });
                    } else {
                        element.value = "";
                        alert("Invalid file type!");
                    }
                };

                $scope.$watch('email', function() {
                    if ($('#msFile').val() !== "" && $('#clFile').val() !== ""
                            && $('#email').val() !== "" && $('#name').val() !== "" && !$scope.emailInvalid) {
                        $scope.invalid = false;
                        $scope.emailInvalid = null;
                        $scope.validateEmail();
                    } else {
                        $scope.invalid = true;
                        $scope.emailInvalid = null;
                    };
                });

                $scope.validateEmail = function() {
                    var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(!regex_email.test($scope.email)) {
                        $scope.emailInvalid = "Invalid email id!";
                        $scope.invalid = true;
                    }
                };
                
                $scope.$watch('name', function() {
                    if ($('#msFile').val() !== "" && $('#clFile').val() !== ""
                            && $('#email').val() !== "" && $('#name').val() !== "" && !$scope.emailInvalid) {
                        $scope.invalid = false;
                    } else {
                        $scope.invalid = true;
                    };
                });

                $scope.uploadFiles = function() {
                    $(".spinner").show();
                    var fd = new FormData();
                    for (var i in $scope.files) {
                        fd.append(fieldNames[i], $scope.files[i]);
                    }
                    fd.append("uploaderEmail", $scope.email);
                    fd.append("uploaderName", $scope.name);

                    var xhr = new XMLHttpRequest();
                    
                    xhr.addEventListener("load", uploadComplete, false);
                    xhr.addEventListener("error", uploadFailed, false);

                    xhr.open("POST", "/uploadFiles");
//                    xhr.onload = function(e) {
//                        alert('ok');
//                    };
                    xhr.send(fd);

                    function uploadComplete(evt) {
                        /* This event is raised when the server send back a response */
                        $(".spinner").hide();
                        alert("✔ Files successfully submitted!");
                    }
                    function uploadFailed(evt) {
                        
                        $(".spinner").hide();
                        alert("✘ Fail! There was an error attempting to upload the file.");
                    }
                };
            }]);
