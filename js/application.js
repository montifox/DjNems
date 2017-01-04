'use strict';

var app = angular.module( 'app' , ['ngRoute','angular-storage','myServices','controllersAdmin','controllersNavigation','controllersSite'] );

app.config([ '$routeProvider', function($routeProvider){
    
    //--------------_Admin__Music_--------------
    $routeProvider.when('/admin/music',{
        controller : 'songs',
        templateUrl : 'partials/admin/music.html'
    });
    
    //--------------_Admin_ADD_Music_--------------
    $routeProvider.when('/admin/music/addmusic',{
        controller : 'addmusic',
        templateUrl : 'partials/admin/addmusic.html'
    });
    
    //---------------_Admin_User_----------------
    $routeProvider.when('/admin/users',{
        controller : 'users',
        templateUrl : 'partials/admin/users.html'
    });
    
    //--------------_Admin_ADD_Users_--------------
    $routeProvider.when('/admin/users/adduser',{
        controller : 'adduser',
        templateUrl : 'partials/admin/adduser.html'
    });
    //---------------_Admin_Orders_---------------
    $routeProvider.when('/admin/orders',{
        controller : 'orders',
        templateUrl : 'partials/admin/orders.html'
    });
    //---------------_Admin_Msg_---------------
    $routeProvider.when('/admin/msg',{
        controller : 'msg',
        templateUrl : 'partials/admin/msg.html'
    });
    
    //--------------_Site__Home_--------------
    $routeProvider.when('/home',{
        controller : '',
        templateUrl : 'partials/site/home.html'
    });
    //--------------_Site__Music_--------------
    $routeProvider.when('/music',{
        controller : 'showSongs',
        templateUrl : 'partials/site/music.html'
    });
    
    //--------------_Site__Cart_--------------
    $routeProvider.when('/cart',{
        controller : 'cartCtrl',
        templateUrl : 'partials/site/cart.html'
    });

    //---------------_Site_SendMSG_---------------
    $routeProvider.when('/sendMsg',{
        controller : 'sendMsg',
        templateUrl : 'partials/site/sendMsg.html'
    });
      

    //---------------Login---------------
    $routeProvider.when('/login',{
        controller : 'login',
        templateUrl : 'partials/site/login.html'
    });    
    
    //----------_Others_-----------------
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    
}]);

