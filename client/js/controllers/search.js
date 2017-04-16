angular
    .module('SearchCtrl', [])
    .controller('SearchController', function ($scope, SearchService, AlbumService) {

        $scope.searcArtist = () => {
            $scope.albumresult = null
            if ($scope.artistName != undefined && $scope.type != undefined) {
                SearchService.search.query({
                    q: $scope.artistName,
                    type: $scope.type.toLowerCase()

                }, (response) => {
                    $scope.results = response[0]
                })
            }
        }

        $scope.showDetails = (type, id) => {
            console.log(type + "id: " + id)
            $scope.results = null
            AlbumService.album.query({
                id: id,
                type: type
            }, (response) => {
                $scope.albumresult = response[0]
            })
        }
    })