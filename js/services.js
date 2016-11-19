'use strict';

var myServices = angular.module( 'myServices' , ['ngRoute'] );


myServices.factory('cartSrv',[ 'store' , function(store){
    
    
    if (store.get('cartSrv'))
        var cartSrv=store.get('cartSrv');
    else
        var cartSrv=[];
    
    
    
    cartSrv.show= function(){
        return cartSrv;
    }
    
    
    cartSrv.add= function(songs){
        
        var addNew=true;
        angular.forEach(cartSrv,function(value , key){
            
            if(value.tytul==songs.tytul)
                {
                    addNew=false;
                    console.log("już był");            
                }
        
            });
        if(addNew)
                {
                    cartSrv.push(songs);                  
                }
           
            store.set('cartSrv', cartSrv);
    }
    
    
    cartSrv.empty= function(){
        
        store.remove('cartSrv');
        cartSrv.length=0;
    }
    
    return cartSrv;
}])