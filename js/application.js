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
    
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    
}]);

