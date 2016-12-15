(function () {

  'use strict';

  angular
    .module('app')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['GraficosService'];

  function HomeCtrl(GraficosService) {
    var vm = this;

    activate();

    function activate() {
      vm.graficoEspecialidade = GraficosService.obterGraficoEspecialidade();
    }
  }
})();
