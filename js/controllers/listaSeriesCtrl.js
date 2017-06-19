angular.module("listaSeries").controller("listaSeriesCtrl", function ($scope,$http,$filter) {
	$scope.app = "Lista De Séries";
	$scope.series = [];
	$scope.minhasSeries = [];


	$scope.pesquisarSerie = function(serie){
		$http.get("https://omdbapi.com/?s=" + serie + "&apikey=93330d3c&type=series").then(function(response) {
			if(response.data.Response == "True"){
				$scope.series = response.data.Search;


			}else{
				alert("a série nao existe");
			};


			delete $scope.serie;
		}, function() {

		});

		
	};




	$scope.verificaArray = function(serie){
		for (var i = $scope.minhasSeries.length - 1; i >= 0; i--) {
			if($scope.minhasSeries[i]== serie){
				return true;
				
			}
		}
		return false;
	}

	$scope.addSerie = function(serie){
		if($scope.verificaArray(serie)){

			alert("série já pertence ao seu perfil");
		}else{
			$scope.minhasSeries.push(serie);
		}
	}

	$scope.removeSerie = function(serie){
		
	}	


});