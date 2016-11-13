'use strict';

var controllersSite = angular.module( 'controllersSite' , ['ngRoute'] );

controllersSite.controller( 'showSongs' , [ '$scope' , '$http', function( $scope, $http ){

    $http.get('model/music_library.json').
    success(function(data){
        $scope.showSongs=data;                   
    }).error(function(){
        console.log('error jsons');                   
    });


}]);