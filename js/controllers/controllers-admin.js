'use strict';

var controllersAdmin = angular.module( 'controllersAdmin' , ['ngRoute'] );

controllersAdmin.controller( 'songs' , [ '$scope' , '$http' , function( $scope, $http ){

    $http.get('api/admin/songs/get').
    success(function(data){
        $scope.songs=data;                   
    }).error(function(){
        console.log('error jsons');                   
    });


    $scope.delete = function(song,$index)
    {
        
       // if(!confirm('czy napewno chcesz usunac?'));
            
        
        $scope.songs.splice($index, 1); // $index, ile elementow 

        $http.post('api/admin/songs/delete/',{
            song : song
        }).
        error(function(){
            console.log('error jsons');                   
        });
    };


}]);



controllersAdmin.controller( 'addmusic' , [ '$scope' , '$http', function( $scope, $http ){

    $scope.addmusic=function(song){
        //console.log(song);
        $http.post('api/admin/songs/create',{    
            song : song
        }).
        success(function(){
            console.log('success komunikacja z api dziala');                   
            $scope.success=true;                   
        }).error(function(){ 
            console.log('error komunikacji  z api');                   
        });

    };

}]);




controllersAdmin.controller( 'users' , [ '$scope' , '$http', function( $scope, $http ){


        $http.get('api/admin/users/get').
        success(function(data){
            $scope.users=data;                   
        }).error(function(){
            console.log('error jsons');                   
        });


        $scope.delete = function(user,$index)
        {

            // if(!confirm('czy napewno chcesz usunac?'));


            $scope.users.splice($index, 1); // $index, ile elementow 

            $http.post('api/admin/users/delete/',{
                user : user
            }).
            error(function(){
                console.log('error jsons');                   
            });
        };

}]);
    
    controllersAdmin.controller( 'adduser' , [ '$scope' , '$http', function( $scope, $http ){

        $scope.user={};
        $scope.user.role='user';
        
        $scope.adduser=function(user){
            console.log(user);
            $http.post('api/site/user/create',{    
                user : user
            }).
            success(function(){
                console.log('success komunikacja z api dziala');                   
                $scope.success=true;                   
            }).error(function(){ 
                console.log('error komunikacji  z api');                   
            });

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





