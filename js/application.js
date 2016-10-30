'use strict';

var app = angular.module( 'app' , [] );

app.controller( 'songs' , [ '$scope' , function( $scope ){
	
	$scope.songs = [
		{ autor : 'Darude' , tytul : 'Sand storm' , url : '/darude/sandstorm', gatunek: 'trans tehno' },
		{ autor : 'Sum-41' , tytul : 'Fake my own death' , url : '/sum41/fakemyowndeath', gatunek: 'punk' }
	];

	console.log(  );

}]);
