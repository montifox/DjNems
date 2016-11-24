'use strict';

var controllersSite = angular.module( 'controllersSite' , ['ngRoute'] );

controllersSite.controller( 'showSongs' , [ '$scope' , '$http', "cartSrv", function( $scope, $http, cartSrv ){

    $http.get('model/music_library.json').
    success(function(data){
        $scope.showSongs=data;                   
    }).error(function(){
        console.log('error jsons');                   
    });
    
   
    $scope.addToCart= function(songs){
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




controllersSite.controller( 'siteOrders' , [ '$scope' , '$http', function( $scope, $http ){

    $http.get('model/orders.json').
    success(function(data){
        $scope.orders=data;                   
    }).error(function(){
        console.log('error jsons');                   
    });

}]);


controllersSite.controller( 'login' , [ '$scope' , '$http', function( $scope, $http ){

    //ToDo: pobrac dane z formularza i dodac do Api
    
    
    $scope.formSubmit=function(){
        
        $scope.errors={};
        $scope.errors.login=true;
        
        console.log($scope.input);
    };
}]);

controllersSite.controller( 'register' , [ '$scope' , '$http', function( $scope, $http ){

    //ToDo: pobrac dane z formularza i dodac do Api
    
    
    $scope.formSubmit=function(){
        $scope.errors={};
        $scope.errors.login=false;
        
    
       // $scope.errors.name="chujowe imie";
    
        $scope.submit = true;
        
        console.log($scope.input);
    };
}]);
