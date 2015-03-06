movieApp.controller("movieListController", ['$scope', '$http', function($scope, $http){
	$http.get('data/imdb250.json').success(function(data){
		$scope.movies = data;
	});
}]);

movieApp.controller("movieDetailController", ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	$http.get('data/imdb250.json').success(function(data){
		$scope.movies = data;
		for (var i = 0; i < data.length; i++){

			if (data[i].title === $routeParams.title) $scope.at = i;
			
		}
		$scope.film = $scope.movies[$scope.at];
	});	

	$scope.incrementAt = function(){
		$scope.at = $scope.at + 1;
		if ($scope.at >249) $scope.at = 1;
		$scope.film = $scope.movies[$scope.at];
	}
	$scope.decrementAt = function(){
		$scope.at = $scope.at - 1;
		if ($scope.at <0) $scope.at = 249;
		$scope.film = $scope.movies[$scope.at];
	}

}]);

movieApp.controller("movieGalleryController", ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	$scope.selGenre = null;
	$scope.change = function(g){
		$scope.selGenre = g;
		if (g === "All") $scope.selGenre = null;
	}
	$scope.genres = ["All", "Action", "Adventure", "Crime", "Comedy","Drama",
			"Musical", "Mystery", "Romance", "Sci-Fi", "Thriller","Western"]

	$http.get('data/imdb250.json').success(function(data){
		$scope.movies = data;
	});
}]);