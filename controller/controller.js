(function () {
    angular.module('firstAngularApp').controller('usersController', ['$scope','dataService',usersController]);
    function usersController($scope ,dataService) {
         dataService.getmovies().then(function(resp){
           $scope.results=resp['data']['results'];
         },function(err){
           console.log(err);
         });
         $scope.movieDetail = function (movie){
           $scope.title = movie['original_title'];
           $scope.overview = movie['overview'];
           $scope.id = movie['id'];
         }
    }


})();
