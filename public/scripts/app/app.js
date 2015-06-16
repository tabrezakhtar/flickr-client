var flickrApp = angular
  .module('flickrApp', [
    'ngRoute', 
    'ui.bootstrap',
    'flickrApp.controllers',
	'flickrApp.services',
	'flickrApp.directives',
	'flickrApp.mediators'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';

    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
  }]);

var controllerModule = angular.module('flickrApp.controllers', []);
var serviceModule = angular.module('flickrApp.services', []);
var directiveModule = angular.module('flickrApp.directives', []);
var mediatorModule = angular.module('flickrApp.mediators', []);