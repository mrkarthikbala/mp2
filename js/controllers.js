

movieApp.controller("movieListController", ['$scope', '$http', function($scope, $http){
	$http.get('data/imdb250.json').success(function(data){
		$scope.movies = data;
	});
}]);

movieApp.controller("movieDetailController", ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	
	$http.get('data/imdb250.json').success(function(data){
		for (var i = 0; i < data.length; i++){
			if (data[i].title === $routeParams.title) $scope.film = data[i];
		}
	});	


}]);

/*
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);

  */