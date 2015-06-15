controllerModule.controller('HomeCtrl', ['$scope', 'flickrImageService', function ($scope, flickrImageService) {
	'use strict';

	$scope.message = 'Home Controller';	

	flickrImageService.getRecentImages().then(
		function(data) {
			debugger;
		}
	)
}]);