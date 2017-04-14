/// <reference path="E:/nanoDegreeTraining/D13-Angular01/scripts/angular.js" />
// IIFE
// the same pattern
(function () {
    angular.module('firstAngularApp').factory('dataService', ['$http',dataService]);
    function dataService($http) {
        //it is responsible for bringing data
        // wroker :D
        function popularMovie() {
            return $http.get("http://api.themoviedb.org/3/movie/top_rated?api_key=b4dc790fe4455d2de33988fec71923a1")
        }
        return {
            getmovies : popularMovie
        };
    }
})();
