angular
        .module('app')
        .controller('adminCtrl', ['$scope', function($scope) {
                $scope.file = null;
        
                $scope.setFiles = function(element) {
                    if (element.files[0].type.search("pdf") > -1){
                        $scope.$apply(function($scope) {
                            if ($('#pdfFile').val() !== "" && $('#authorName').val() !== ""
                                    && $('#title').val() !== "") {
                                $scope.invalid = false;
                            } else {
                                $scope.invalid = true;
                            }
                            ;
                            $scope.file = element.files[0];
                        });
                    } else {
                        element.value = "";
                        alert("Invalid file type!");
                    }
                };
                
                $scope.$watch('title', function() {
                    if ($('#pdfFile').val() !== "" && $('#authorName').val() !== "" 
                            && $('#title').val() !== "") {
                        $scope.invalid = false;
                    } else {
                        $scope.invalid = true;
                    };
                });
                
                $scope.$watch('name', function() {
                    if ($('#pdfFile').val() !== "" && $('#authorName').val() !== ""
                            && $('#title').val() !== "") {
                        $scope.invalid = false;
                    } else {
                        $scope.invalid = true;
                    };
                });
                
                $scope.uploadFiles = function() {
                    var fd = new FormData();
                    
                    fd.append("approvedFile", $scope.files);
                    fd.append("authorName", $scope.name);

                    var xhr = new XMLHttpRequest();
                    xhr.addEventListener("load", uploadComplete, false);
                    xhr.addEventListener("error", uploadFailed, false);
                    xhr.open("POST", "http://localhost:3000/adminUpload");

                    xhr.send(fd);

                    function uploadComplete(evt) {
                        /* This event is raised when the server send back a response */
                        alert("Successfully Uploaded!");
                    }
                    function uploadFailed(evt) {
                        alert("There was an error attempting to upload the file.");
                    }
                };
        }]);

