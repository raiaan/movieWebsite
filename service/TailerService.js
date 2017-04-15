
// angular.module('firstAngularApp').factory('tailerService', ['$http', function(id) {
//    return function(id,$http) {
//      console.log($http);
//      return $http.get("http://api.themoviedb.org/3/movie/top_rated?api_key=b4dc790fe4455d2de33988fec71923a1")
//    };
//  }]);
(function () {
    angular.module('firstAngularApp').factory('tailerService', ['$http',tailerService]);
    function tailerService($http) {
        //it is responsible for bringing data
        // wroker :D
        function popularMovie(id) {
            return $http.get("http://api.themoviedb.org/3/movie/"+id+"/videos?api_key=b4dc790fe4455d2de33988fec71923a1")
        }
        return {
            getmovies : popularMovie
        };
    }
})();
