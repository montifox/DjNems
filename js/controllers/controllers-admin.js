'use strict';

var controllersAdmin = angular.module( 'controllersAdmin' , ['ngRoute'] );

controllersAdmin.controller( 'songs' , [ '$scope' , '$http' ,'cart', function( $scope, $http, cart ){

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

    cart.show();
    
}]);



controllersAdmin.controller( 'addmusic' , [ '$scope' , '$http', function( $scope, $http ){

    $scope.addmusic=function(){

        // ToDo connect with API

        console.log($scope.song);
    };



}]);




controllersAdmin.controller( 'users' , [ '$scope' , '$http', function( $scope, $http ){

    $http.get('model/users.json').
    success(function(data){
        $scope.users=data;                   
    }).error(function(){
        console.log('error jsons');                   
    });


    $scope.delete = function(users,$index)
    {

        //ToDo conect with API
        $scope.users.splice($index, 1); // $index, ile elementow 

    };
}]);

controllersAdmin.controller( 'orders' , [ '$scope' , '$http', function( $scope, $http ){

    $http.get('model/orders.json').
    success(function(data){
        $scope.orders=data;                   
    }).error(function(){
        console.log('error jsons');                   
    });


    $scope.delete = function(orders,$index)
    {

        //ToDo conect with API
        $scope.orders.splice($index, 1); // $index, ile elementow 

    };

    $scope.changeStatus = function(orders)
    {
        if (orders.status == 0) orders.status = 1;       
        else orders.status = 0;
    };

}]);


controllersAdmin.controller( 'adduser' , [ '$scope' , '$http', function( $scope, $http ){

    $scope.adduser=function(){

        // ToDo connect with API

        console.log($scope.user);
    };



}]);