(function () {

  'use strict';

  angular
    .module('app')
    .controller('ProjetosFormCtrl', ProjetosFormCtrl);

  ProjetosFormCtrl.$inject = ['ProjetosService','AnalistasService','Global', '$state', '$mdToast', '$stateParams', '$filter'];

  function ProjetosFormCtrl(ProjetosService,AnalistasService,Global, $state, $mdToast, $stateParams, $filter) {
    var vm = this;

    vm.salvar = salvar;
    vm.projeto = {};
    vm.analistas = AnalistasService.query();

    if($stateParams.id){
      vm.projeto = ProjetosService.get({id:$stateParams.id});
      vm.dsOperacao = 'Alterar';

    }else{
      vm.dsOperacao = 'Adicionar';
    }

    function salvar(projetosForm){
      if(!projetosForm.$invalid){
        
        vm.projeto.dataInicio = new Date(vm.projeto.dataInicio);
        vm.projeto.dataFim = new Date(vm.projeto.dataFim);

        if(vm.projeto.id){
          ProjetosService.update({id:vm.projeto.id}, vm.projeto).$promise.then(function (data) {
            $mdToast.showSimple("projeto salvo com sucesso.");
            $state.go("projetos.list");
          }).catch(function(response){
            $mdToast.showSimple(response.data.message);
          });
        }else{
            vm.save = ProjetosService.save(vm.projeto).$promise.then(function(data) {
            $mdToast.showSimple("Projeto salvo com sucesso.");
            $state.go("projetos.list");
          }).catch(function(response){
            $mdToast.showSimple(response);
          });
        }
      }
    }
  }
})();
