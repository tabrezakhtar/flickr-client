serviceModule.service('flickrImageService', ['$q', 'httpService', function ($q, httpService) {
    'use strict';

    var flickerRecentImageServiceUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK';

    return {
        getRecentImages: function (search) {
            var deferred = $q.defer();

            httpService.getJsonp(flickerRecentImageServiceUrl + '&tags=' + search).then(function(imageResponse) {
                deferred.resolve(imageResponse);
            });

            return deferred.promise;
        }
    };
}]);