var appCarrosService = angular.module('carros',[]);

appCarrosService.factory('Carros', ['$http', function($http){
    var listaDeCarros = function(){
		return $http.get('/apiCarros');
	};

    return {
        obtenerCarros: listaDeCarros
    };

}]);

appCarrosService.controller('CarrosController',[
    '$scope','Carros', function($scope, Carros) {

        $scope.obtenerLista = function(){
            Carros.obtenerCarros()
            .then( function(res){
                var carros = res.data;
                console.log(carros);
                $scope.listaCarros = carros;
            }, function(res) {
                console.log('error');
            });
        };

        $scope.obtenerLista();
}]);