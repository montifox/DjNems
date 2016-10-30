'use strict';

var controllers = angular.module( 'controllers' , ['ngRoute'] );

controllers.controller( 'songs' , [ '$scope' , '$http', function( $scope, $http ){
	
        $http.get('model/music_library.json').
        success(function(data){
            $scope.songs=data;                   
        }).error(function(){
            console.log('error jsons');                   
        });
	

}]);
