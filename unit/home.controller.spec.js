'use strict';

describe('HomeController', function() {

    var $scope, $controller;

    beforeEach(module('flickrApp.controllers'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $scope = _$rootScope_.$new();
        $controller = _$controller_;

        $controller('HomeCtrl', {'$scope': $scope});
    }));

    it('should make about menu item active.', function() {
        expect($scope.message).toEqual('Home Controller');
    });
});