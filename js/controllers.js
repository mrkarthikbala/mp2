

movieApp.controller("movieListController", ['$scope', '$http', function($scope, $http){
	$http.get('data/imdb250.json').success(function(data){
		$scope.movies = data;
	});
}]);

