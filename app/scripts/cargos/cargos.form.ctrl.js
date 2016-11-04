(function () {

  'use strict';

  angular
    .module('app')
    .controller('CargosFormCtrl', CargosFormCtrl);

  CargosFormCtrl.$inject = ['CargosService','Global'];

  function CargosFormCtrl(CargosService,Global) {
    var vm = this;

    vm.salvar = function(){
      alert(vm.cargo.nomeCargo);
    }
  }
})();
