/* 
 * Author: Prataksha Gurung
 * All rights reserverd.
 * 
 */
var app = angular.module('app', ['ui.router', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'aboutCtrl',
                templateUrl: 'templates/about.html'
            })
            .when('/table_of_content', {
                controller: 'tocCtrl',
                templateUrl: 'templates/table_of_content.html'
            })
            .when('/guide_to_authors', {
                controller: 'gtaCtrl',
                templateUrl: 'templates/guide_to_authors.html'
            })
            .when('/call_for_papers', {
                controller: 'cfpCtrl',
                templateUrl: 'templates/call_for_papers.html'
            })
            .when('/manuscript_submission', {
                controller: 'msCtrl',
                templateUrl: 'templates/manuscript_submission.html'
            })
            .when('/uploader', {
                controller: 'uploaderCtrl',
                templateUrl: 'templates/uploader.html'
            })
            .when('/feedback', {
                controller: 'feedbackCtrl',
                templateUrl: 'templates/feedback.html'
            })
            .otherwise({redirectTo: '/'});
});


