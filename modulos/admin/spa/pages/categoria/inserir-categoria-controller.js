(function() {

	'use strict';

	angular.module('inserirCategoriaController',['ngTable'])

	.controller('inserirCategoriaController', inserirCategoriaController);

	inserirCategoriaController.$inject = ['$http','$rootScope','$scope','$location'];

	function inserirCategoriaController($http, $rootScope, $scope, $location){

		var vm = this;

		$http({
			url: "spa/resources/fontawesome.json",
			method: "GET"
		}).then(function(response){
			vm.listaIcones = (response.data);
		});

		vm.voltar = function(){
			$location.path("/categoria");
		};

		vm.salvar = function(){
			$http({
				url: "http://localhost/apirest/admin/categoria/inserir",
				method: "POST",
				data: {nome: vm.nome, cor: vm.cor, fa_icone: vm.fa_icone}
			}).then(function(response){
				vm.resposta = response;
				console.log(response);
			});
		};

	}

})();
