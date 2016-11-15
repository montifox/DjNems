'use strict';

var services = angular.module( 'services' , ['ngRoute'] );


services.factory('cartSrv',[ 'store' , function(store){
    
    
    if (store.get('cart'))
        var cartSrv=store.get('cartSrv');
    else
        var cartSrv =[];
    
    cartSrv.show = function(){
        
        return cartSrv;
    };
    
    cartSrv.addToCart = function(songs){
        
        cartSrv.push(songs);
        
        console.log(cartSrv);
        store.set('cartSrv', cartSrv);
        
        
    };
    
    cartSrv.emptyCart= function() {
        
        store.remove('cartSrv');  
        cartSrv.length=0;
    };    
    
    return cartSrv;
}])