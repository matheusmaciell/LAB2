angular.module("listaSeries").controller("listaSeriesCtrl", function ($scope,$http,$filter) {
	$scope.app = "Lista De Séries";
	$scope.series = [];
	$scope.minhasSeries = [];
	$scope.watchlist = [];

	$scope.pesquisarSerie = function(serie){
		$http.get("https://omdbapi.com/?s=" + serie + "&apikey=93330d3c&type=series").then(function(response) {
			if(response.data.Response == "True"){
				$scope.series = response.data.Search;

			delete $scope.serie;	
			}else{
				alert("a série nao existe");
			};


			
		}, function() {

		});

		
	};




	$scope.verificaArray = function(serie,array){
		for (var i = array.length - 1; i >= 0; i--) {
			if(array[i].Title == serie.Title){
				return true;
				
			}
		}
		return false;
	}
	$scope.addSerieWatch = function(serie){
		if($scope.verificaArray(serie,$scope.watchlist ) & $scope.verificaArray(serie,$scope.minhasSeries)){

			alert("série já pertence ao seu watchlist");
		}else{
			$scope.watchlist.push(serie);
		}
	}

	$scope.addSeriePerfil = function(serie){
		if($scope.verificaArray(serie,$scope.minhasSeries)){

			alert("série já pertence ao seu perfil");
		}else{
			$scope.minhasSeries.push(serie);
		}
		$scope.removeSerie(serie,$scope.watchlist);
	}

	$scope.removeSerie = function(serie,array){
		for (var i = array.length - 1; i >= 0; i--) {
			if(array[i].Title == serie.Title){
				array.splice(i, 1);
				
			}
		}
	}	


});