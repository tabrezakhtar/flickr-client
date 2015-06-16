controllerModule.controller('HomeCtrl', ['$scope', 'flickrImageService', function ($scope, flickrImageService) {
	'use strict';

	$scope.vm = {
		title: '',
		items: null,
		filter: ''
	};	

	flickrImageService.getRecentImages().then(
		function(flickrResult) {
			$scope.vm.title = flickrResult.title;
			$scope.vm.items = flickrResult.items;
		}
	);

	$scope.search = function() {
		alert($scope.vm.filter);
	};
}]);