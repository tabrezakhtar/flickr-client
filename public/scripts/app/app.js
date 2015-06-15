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
      .when('/test', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
  }]);

var controllerModule = angular.module('flickrApp.controllers', []);
var serviceModule = angular.module('flickrApp.services', []);
var directiveModule = angular.module('flickrApp.directives', []);
var mediatorModule = angular.module('flickrApp.mediators', []);