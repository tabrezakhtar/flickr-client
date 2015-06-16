controllerModule.controller('HomeCtrl', ['$scope', 'flickrImageService', function ($scope, flickrImageService) {
	'use strict';

	$scope.vm = {
		title: '',
		items: null,
		filter: ''
	};

	getRecentImages();

	$scope.search = function() {
		getRecentImages();
	};

	function getRecentImages() {
		flickrImageService.getRecentImages($scope.vm.filter).then(
			function(flickrResult) {
				$scope.vm.title = flickrResult.title;
				$scope.vm.items = flickrResult.items;
			}
		);
	}
}]);