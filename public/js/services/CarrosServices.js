var appCarrosService = angular.module('CarrosService',[]);

appCarrosService.factory('Carros', ['$http', function($http){
    var listaDeCarros = function(){
		return $http.get('/apiCarros');
	};

    return {
        obtenerCarros: listaDeCarros
    };

}]);

