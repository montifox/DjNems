'use strict';

var services = angular.module( 'services' , ['ngRoute'] );


services.factory('cart',[ 'store' , function(store){
   
    var cart =[];
    
    cart.show = function(){
        
        console.log('zawartosc');
    };
    
    return cart;
}])