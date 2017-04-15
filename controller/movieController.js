(function () {
    angular.module('firstAngularApp').controller('usersController', ['$scope','$sce','dataService','tailerService',usersController]);
    function usersController($scope ,$sce ,dataService,tailerService) {
         dataService.getmovies().then(function(resp){
           $scope.results=resp['data']['results'];
         },function(err){
           console.log(err);
         });
         $scope.movieDetail = function (movie){
           $scope.title = movie['original_title'];
           $scope.overview = movie['overview'];
           $scope.id = movie['id'];

           $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
          }
          tailerService.getmovies(movie['id']).then(function (resp){
            var youtubeLinks=[];
                //$scope.tailer=resp['data']['results'];
                for(var i=0; i<resp['data']['results'].length;i++){
                  youtubeLinks.push("https://www.youtube.com/embed/"+resp['data']['results'][i]['key']);
                }
                console.log(youtubeLinks);
                $scope.tailer=  youtubeLinks;
                //console.log($scope.t);
             },function (err){
               console.log("error");
             });
           }
         }

})();
