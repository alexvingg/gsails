(function () {

  'use strict';

  angular
    .module('app')
    .controller('CargosFormCtrl', CargosFormCtrl);

  CargosFormCtrl.$inject = ['CargosService','Global', '$state', '$mdToast'];

  function CargosFormCtrl(CargosService,Global, $state, $mdToast) {
    var vm = this;

    vm.salvar = salvar;

    function salvar(){
      vm.save = CargosService.save(vm.cargo);

      vm.save.$promise.then(function(data) {
        //criar uma factory para troca de paginas
        $mdToast.showSimple("Cargo salvo com sucesso.");
        $state.go("cargos.list");
      }).catch(function(req){
        //verificar como tratar problemas ao salvar
        $mdToast.showSimple("Erro ao salvar cargo.");
      });
    }
  }
})();
