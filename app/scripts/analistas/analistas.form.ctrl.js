(function () {

  'use strict';

  angular
    .module('app')
    .controller('AnalistasFormCtrl', AnalistasFormCtrl);

  AnalistasFormCtrl.$inject = ['AnalistasService','CargosService','Global', '$state', '$mdToast', '$stateParams'];

  function AnalistasFormCtrl(AnalistasService,CargosService,Global, $state, $mdToast, $stateParams) {
    var vm = this;
    vm.salvar = salvar;
    activate();
    function activate() {
      vm.analista = {};
      vm.cargos = CargosService.query();
      if($stateParams.id){
        vm.analista = AnalistasService.get({id:$stateParams.id});
        vm.dsOperacao = 'Alterar';
      }else{
        vm.dsOperacao = 'Adicionar';
      }
    }

    function salvar(analistasForm){
      if(!analistasForm.$invalid){

        if(vm.analista.id){
          AnalistasService.update({id:vm.analista.id}, vm.analista).$promise.then(function (data) {
            $mdToast.showSimple("Analista salvo com sucesso.");
            $state.go("analistas.list");
          }).catch(function(response){
            $mdToast.showSimple(response.data.message);
          });
        }else{
          vm.save = AnalistasService.save(vm.analista).$promise.then(function(data) {
            $mdToast.showSimple("Analista salvo com sucesso.");
            $state.go("analistas.list");
          }).catch(function(response){
            $mdToast.showSimple(response.data.message);
          });
        }
      }
    }
  }
})();
