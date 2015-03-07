
var movieApp = angular.module("movieListApp", ['ngRoute', 'ngAnimate']);

movieApp.config(function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl : './partials/list.html',
		controller : 'movieListController'
	}).
	when('/list/:title', {
		templateUrl: 'partials/details.html',
		controller: 'movieDetailController'
	}).
	when('/gallery',{
		templateUrl : './partials/gallery.html',
		controller : 'movieGalleryController'
	}).
	otherwise({
		redirectTo: '/list'
	});
});

var nameApp = angular.module("nameApp", ['ngAnimate']);