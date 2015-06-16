'use strict';

describe('HomeController', function() {

    var $scope, $controller, $q, def, flickrImageService;
    var mockResponse = {
    "title" : "Uploads from everyone",
    "items" : [{
            "title" : "Someone",
            "link" : "https://www.flickr.com/photos/leona/18234142834/",
            "media" : {
                "m" : "https://farm6.staticflickr.com/5555/18234142834_638d019f05_m.jpg"
            },
            "date_taken" : "2015-06-16T02:59:59-08:00",
            "author" : "nobody@flickr.com (Leona)",
            "author_id" : "44124432580@N01",
            "tags" : ""
        }, {
            "title" : "Warhammer World",
            "link" : "https://www.flickr.com/photos/76648378@N05/18234142904/",
            "media" : {
                "m" : "https://farm4.staticflickr.com/3833/18234142904_1f21ac44dd_m.jpg"
            },
            "date_taken" : "2015-05-31T11:45:36-08:00",
            "author" : "nobody@flickr.com (Tech2063)",
            "tags" : ""
        }
    ]};

    beforeEach(module('flickrApp.controllers'));
    beforeEach(module('flickrApp.services'));

    beforeEach(inject(function(_$rootScope_, _$controller_, $injector){
        $scope = _$rootScope_.$new();
        $q = $injector.get('$q');
        $controller = _$controller_;
        flickrImageService = $injector.get('flickrImageService');             
      
        def = $q.defer();
        def.resolve(mockResponse);
        spyOn(flickrImageService, 'getRecentImages').and.returnValue(def.promise);

        $controller('HomeCtrl', {'$scope': $scope, 'flickrImageService': flickrImageService});
    }));

    it('should have a title defined', function() {
        expect($scope.vm.title).toEqual('');
    });

    it('should get recent images', function() {
        expect(flickrImageService.getRecentImages).toHaveBeenCalled();
    });

    it('should get a title', function() {
        $scope.search();
        $scope.$apply();
        expect($scope.vm.title).toEqual('Uploads from everyone'); 
    });

    it('should get some items', function() {
        $scope.search();
        $scope.$apply();
        expect($scope.vm.items.length).toEqual(2); 
    });
});