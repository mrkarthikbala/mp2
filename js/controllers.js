var demoApp = angular.module('demoApp', []);

demoApp.controller('demoController', ['$scope', '$http', function($scope, $http) {
  $http.get('public/data/cs498rk.json').success(function(data) {
    $scope.courseInfo = data;
    $scope.artistOrder = 'name';
  });
}]);


var listApp = angular.module("movieListApp", []);

listApp.controller("movieListController", ['$scope', '$http', function($scope, $http){
	$http.get('data/imdb250.json').success(function(data){
		$scope.movies = data;
	});
}]);

