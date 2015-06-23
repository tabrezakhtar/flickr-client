var flickrApp = angular
  .module('flickrApp', [
    'ngRoute', 
    'wu.masonry',
    'ui.bootstrap',
    'flickrApp.controllers',
	  'flickrApp.services'
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