'use strict';

describe('HomeController', function() {

    var $scope, $controller, flickrImageService;

    beforeEach(module('flickrApp.controllers'));
    beforeEach(module('flickrApp.services'));

    beforeEach(inject(function(_$rootScope_, _$controller_, $injector){
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        flickrImageService = $injector.get('flickrImageService');

        $controller('HomeCtrl', {'$scope': $scope, 'flickrImageService': flickrImageService});
    }));

    it('should have a title defined', function() {
        expect($scope.vm.title).toEqual('');
    });
});