
var movieApp = angular.module("movieListApp", ['ngRoute']);

movieApp.config(function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl : './partials/list.html',
		controller : 'movieListController'
	});
});