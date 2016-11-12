'use strict';

var controllers = angular.module( 'controllers' , ['ngRoute'] );

controllers.controller( 'navigation' , [ '$scope' , '$location', function( $scope, $location ){
	
    $scope.navigation =function(){
     if(/^\/admin/.test($location.path()))
         return 'partials/admin/navigation.html';
     else     
         return 'partials/site/navigation.html';
    }

}]);



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




controllers.controller( 'users' , [ '$scope' , '$http', function( $scope, $http ){
	
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

controllers.controller( 'orders' , [ '$scope' , '$http', function( $scope, $http ){
	
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


controllers.controller( 'adduser' , [ '$scope' , '$http', function( $scope, $http ){

    $scope.adduser=function(){

        // ToDo connect with API

        console.log($scope.user);
    };



}]);