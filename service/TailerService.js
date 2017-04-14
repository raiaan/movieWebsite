
(function () {
    angular.module('firstAngularApp').factory('TailerService', ['$http','$scope',TailerService]);
    function TailerService($http,id) {
        function popularMovie(id) {
            return $http.get("http://api.themoviedb.org/3/movie/"+id+"/videos")
        }
        return {
            getTailer : popularMovie
        };
    }
})();
