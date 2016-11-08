(function () {

  'use strict';

  angular
    .module('app')
    .controller('CargosListaCtrl', CargosListaCtrl);

  CargosListaCtrl.$inject = ['CargosService','Global', '$state'];

  function CargosListaCtrl(CargosService,Global, $state) {
    var vm = this;

    vm.loadPages = loadPages;
    vm.orderData = orderData;

    vm.edit = editar;

    function editar(_id){
      $state.go('cargos.edit/:id', {id:_id});
    }

    activate();

    function activate() {
      vm.selected = [];
      vm.currentPage = 1;
    }

    function loadPages(page) {
      var perPage = (vm.paging ? vm.paging.meta.perPage : Global.perPage);
      vm.paging = CargosService.findPaginated({ 'page': page, 'per_page': perPage });
      vm.promise = vm.paging.$promise;
    }

    function orderData(field){
      vm.selected = [];
      var order = field.startsWith("-") ? field.substring(1) + " desc" : field;
      vm.paging = CargosService.findPaginated(
        {
          'page': vm.paging.meta.page,
          'per_page': vm.paging.meta.perPage,
          'order': order
        }
      );
      vm.promise = vm.paging.$promise;
    }

    loadPages(1);
  }
})();
