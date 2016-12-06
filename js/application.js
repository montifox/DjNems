'use strict';

var app = angular.module( 'app' , ['ngRoute', 'controllers'] );

app.config([ '$routeProvider', function($routeProvider){
    
    $routeProvider.when('/music',{
        controller : 'songs',
        templateUrl : 'partials/music.html'
    });
    
    $routeProvider.when('/music/addmusic',{
        controller : 'addmusic',
        templateUrl : 'partials/addmusic.html'
    });
    
    //---------------_User_----------------
    $routeProvider.when('/users',{
        controller : 'users',
        templateUrl : 'partials/users.html'
    });
    

    $routeProvider.when('/users/adduser',{
        controller : 'adduser',
        templateUrl : 'partials/adduser.html'
    });
    //---------------_Orders_---------------
    $routeProvider.when('/orders',{
        controller : 'orders',
        templateUrl : 'partials/orders.html'
    });
        
    //----------_Others_-----------------
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    
}]);

