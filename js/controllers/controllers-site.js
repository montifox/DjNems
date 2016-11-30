'use strict';

var controllersSite = angular.module( 'controllersSite' , ['ngRoute'] );

controllersSite.controller( 'showSongs' , [ '$scope' , '$http', "cartSrv", function( $scope, $http, cartSrv ){

    $http.get('api/site/songs/get').
    success(function(data){
        $scope.showSongs=data;                   
    }).error(function(){
        console.log('błąd pączenia z api!');                   
    });
    
   
    $scope.addToCart= function(songs){
       // $scope.songs.success=true;       TO DO HERE
        cartSrv.add(songs);
        
    };


}]);

controllersSite.controller( 'cartCtrl' , [ '$scope' , '$http', 'cartSrv', function( $scope, $http, cartSrv ){

    $scope.cart=cartSrv.show();
    
    $scope.emptyCart=function(){
        cartSrv.empty();
    }
    
    $scope.total=function(){
        var total=0;
        angular.forEach($scope.cart, function(item){
            total+=5;
        });
        
        return total;
    }
    

    $scope.removeItem=function($index){
        $scope.cart.splice($index, 1); // $index, ile elementow 
    }

    $scope.setOrder= function($event){
        
        //ToDo  sprawdz czy uzytkownik jest zalogowany
        //ToDo  zapisz zamowienie w bazie 
        var loggedIn=true;
        if(!loggedIn){
            $event.preventDefault(); 
            $scope.alert = {type: 'warning', msg: 'Błąd, musisz być zalogowany aby zlożyć zamowienie.'};
            return false;
        }
        
        
        $scope.alert = {type: 'success', msg: 'Zamowienie złożone nie odświerzaj strony, trwa przekierowywanie do płatności '};
        console.log($scope.total());
        console.log($scope.cart);
        cartSrv.empty();
        
        $(' #paypalForm').submit();
        
        $event.preventDefault();
    }
    
}]);





controllersSite.controller( 'login' , [ '$scope' , '$http' ,'store', function( $scope, $http, store ){

    $scope.user={};
    
    $scope.formSubmit=function( user ){
        $http.post('api/site/user/login',{  
            email : user.email,
            password : user.password
        }).success(function( data ){
            console.log(data);
            $scope.submit=true;        
            $scope.error=data.error;
            
                    
            
            if(data.check == true){
                window.location.href ='#/admin/users';
            }
            
            console.log('success komunikacja z api dziala');                   
        }).error(function(){ 
            console.log('error komunikacji  z api');                   
        });
        
    }; 
    
}]);


controllersSite.controller( 'sendMsg' , [ '$scope' , '$http', function( $scope, $http ){

    $scope.sendMsg=function(message){
        console.log(message);
        
        $http.post('api/site/msg/create',{     
            message : message
        }).
        success(function(){
            console.log('success komunikacja z api dziala');                   
            $scope.success=true;                   
        }).error(function(){ 
            console.log('error komunikacji  z api');                   
        });
        
    };

}]);
