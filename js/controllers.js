'use strict';

var controllers = angular.module( 'controllers' , ['ngRoute'] );

controllers.controller( 'songs' , [ '$scope' , '$http', function( $scope, $http ){
	
        $http.get('model/music_library.json').
        success(function(data){
            $scope.songs=data;                   
        }).error(function(){
            console.log('error jsons');                   
        });
    
    
        $scope.delete = function(songs,$index)
        {
            
            //ToDo conect with API
            $scope.songs.splice($index, 1); // $index, ile elementow 
            
        };
    
	

}]);



controllers.controller( 'addmusic' , [ '$scope' , '$http', function( $scope, $http ){
	
        $scope.addmusic=function(){
          
            // ToDo connect with API
            
            console.log($scope.song);
        };
    
	

}]);
