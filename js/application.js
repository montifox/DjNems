'use strict';

var app = angular.module( 'app' , ['ngRoute', 'controllers'] );

app.config([ '$routeProvider', function($routeProvider){
    
    $routeProvider.when('/admin/music',{
        controller : 'songs',
        templateUrl : 'partials/admin/music.html'
    });
    
    $routeProvider.when('/music/admin/addmusic',{
        controller : 'addmusic',
        templateUrl : 'partials/admin/addmusic.html'
    });
    
    //---------------_User_----------------
    $routeProvider.when('/admin/users',{
        controller : 'users',
        templateUrl : 'partials/admin/users.html'
    });
    

    $routeProvider.when('/admin/users/adduser',{
        controller : 'adduser',
        templateUrl : 'partials/admin/adduser.html'
    });
    //---------------_Orders_---------------
    $routeProvider.when('/admin/orders',{
        controller : 'orders',
        templateUrl : 'partials/admin/orders.html'
    });
        
    //----------_Others_-----------------
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    
}]);

