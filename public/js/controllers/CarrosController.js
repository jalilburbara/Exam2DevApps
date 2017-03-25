var appCarrosController = angular.module('CarrosContolador',['appCarrosService']);

appCarrosController.controller('CarrosController',[
    '$scope','Carros', function($scope, Carros) {

        $scope.obtenerLista = function(){
            Carros.obtenerCarros()
            .then( function(res){
                var carros = res.data;
                console.log(carros);
                $scope.Carros = carros;
            }, function(res) {
                console.log('error');
            });
        };

        $scope.obtenerLista();
}]);