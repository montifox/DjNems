'use strict';

var app = angular.module( 'app' , ['ngRoute', 'controllersAdmin','controllersNavigation','controllersSite'] );

app.config([ '$routeProvider', function($routeProvider){
    
    //--------------_Admin__Music_--------------
    $routeProvider.when('/admin/music',{
        controller : 'songs',
        templateUrl : 'partials/admin/music.html'
    });
    
    $routeProvider.when('/music/admin/addmusic',{
        controller : 'addmusic',
        templateUrl : 'partials/admin/addmusic.html'
    });
    
    //---------------_Admin_User_----------------
    $routeProvider.when('/admin/users',{
        controller : 'users',
        templateUrl : 'partials/admin/users.html'
    });
    

    $routeProvider.when('/admin/users/adduser',{
        controller : 'adduser',
        templateUrl : 'partials/admin/adduser.html'
    });
    //---------------_Admin_Orders_---------------
    $routeProvider.when('/admin/orders',{
        controller : 'orders',
        templateUrl : 'partials/admin/orders.html'
    });
    
    //--------------_Site__Music_--------------
    $routeProvider.when('/music',{
        controller : 'showSongs',
        templateUrl : 'partials/site/music.html'
    });

        
    //----------_Others_-----------------
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    
}]);

