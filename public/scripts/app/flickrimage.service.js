serviceModule.service('flickrImageService', ['$q', 'httpService', function ($q, httpService) {
    'use strict';

    var flickerRecentImageServiceUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

    return {
        getRecentImages: function () {
            var deferred = $q.defer();

            httpService.get(flickerRecentImageServiceUrl).then(function(songs) {
                deferred.resolve(songs);
            });

            return deferred.promise;
        }
    };
}]);