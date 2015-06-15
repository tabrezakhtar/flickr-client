'use strict';
describe('Flickr Image Service', function() {
    var flickrImageService, httpService, def ,$q;

    beforeEach(module('flickrApp.services'));

    beforeEach(inject(function($injector) {
      $q = $injector.get('$q');
      flickrImageService = $injector.get('flickrImageService');
      httpService = $injector.get('httpService');
      def = $q.defer();
      def.resolve({mockResponse: 'mock data from flickr'});
      spyOn(httpService, 'get').and.returnValue(def.promise);
   }));

    it("should have a getRecentImages method defined", function () {
      expect(flickrImageService.getRecentImages).toBeDefined();  
    });

    it("should return a list of images", function () {
      httpService.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json").then(function(response) {
      expect(response).not.toBe(null);
      expect(response.mockResponse).toEqual('mock data from flickr');
    });    
  });
});