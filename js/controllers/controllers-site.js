'use strict';

var controllersSite = angular.module( 'controllersSite' , ['ngRoute'] );

controllersSite.controller( 'showSongs' , [ '$scope' , '$http','cartSrv', function( $scope, $http,cartSrv ){

    $http.get('model/music_library.json').
    success(function(data){
        $scope.showSongs=data;                   
    }).error(function(){
        console.log('error jsons');                   
    });
    
   

    
    $scope.addToCart= function(songs){
        cartSrv.addToCart(songs);
    };


}]);

controllersSite.controller( 'cartCtrl' , [ '$scope' , '$http','cartSrv', function( $scope, $http, cartSrv ){

    $scope.cart =cartSrv.show();
    
    $scope.emptyCart= function(){
      
        cartSrv.emptyCart();
    };

}]);