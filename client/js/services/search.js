angular.module('SearchSrvc', [])
    .factory('SearchService', function($resource) {
        return {
            search: $resource('/api/search')
        }
    })
    .factory('AlbumService', function($resource){
        return {
            album: $resource("/api/album")
        }
    })