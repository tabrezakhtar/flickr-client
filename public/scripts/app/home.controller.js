controllerModule.controller('HomeCtrl', ['$scope', 'flickrImageService', function ($scope, flickrImageService) {
	'use strict';

	$scope.vm = {
		title: '',
		items: null
	};	

	flickrImageService.getRecentImages().then(
		function(flickrResult) {
			debugger;
			$scope.vm.title = flickrResult.title;
			$scope.vm.items = flickrResult.items;
		}
	)
}]);