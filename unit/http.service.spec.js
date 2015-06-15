'use strict';
describe('Http Service', function() {
   var $httpBackend, requestHandler, httpService;

   beforeEach(module('flickrApp.services'));

   beforeEach(inject(function($injector) {
     $httpBackend = $injector.get('$httpBackend');
     httpService = $injector.get('httpService');
     requestHandler = $httpBackend.when('GET', 'https://api.flickr.com/services/feeds/photos_public.gne')
                          .respond({mockResponse: 'mock data from flickr'});
   }));

  it("should have a get method defined", function () {
      expect(httpService.get).toBeDefined();  
  });

  it("should return a response", function () {
    httpService.get("https://api.flickr.com/services/feeds/photos_public.gne").then(function(response) {
      expect(response).not.toBe(null);
      expect(response.mockResponse).toEqual('mock data from flickr');
    });
    $httpBackend.flush();
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

});