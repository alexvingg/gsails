(function () {

  'use strict';

  angular
    .module('app')
    .controller('CargosFormCtrl', CargosFormCtrl);

  CargosFormCtrl.$inject = ['CargosService','Global', '$state', '$mdToast', '$stateParams'];

  function CargosFormCtrl(CargosService,Global, $state, $mdToast, $stateParams) {
    var vm = this;

    vm.salvar = salvar;
    vm.cargo = {};

    if($stateParams.id){
      vm.cargo = CargosService.find({id:$stateParams.id});
    }

    function salvar(){
      if(vm.cargo.id){
        CargosService.update({id:vm.cargo.id}, vm.cargo).$promise.then(function (data) {
          $mdToast.showSimple("Cargo salvo com sucesso.");
          $state.go("cargos.list");
        }).catch(function(response){
          $mdToast.showSimple(response.data.message);
        });
      }else{
          vm.save = CargosService.save(vm.cargo).$promise.then(function(data) {
          $mdToast.showSimple("Cargo salvo com sucesso.");
          $state.go("cargos.list");
        }).catch(function(response){
          $mdToast.showSimple(response.data.message);
        });
      }
    }
  }
})();
