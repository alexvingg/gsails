(function () {

  'use strict';

  angular
    .module('app')
    .controller('ProjetosListaCtrl', ProjetosListaCtrl);

  ProjetosListaCtrl.$inject = ['ProjetosService','Global', '$state'];

  function ProjetosListaCtrl(ProjetosService,Global, $state) {
    var vm = this;

    vm.loadPages = loadPages;
    vm.orderData = orderData;

    vm.edit = editar;

    function editar(_id){
      //$state.go('cargos.edit/:id', {id:_id});
    }

    activate();

    function activate() {
      vm.selected = [];
      vm.currentPage = 1;
    }

    function loadPages(page) {
      var perPage = (vm.paging ? vm.paging.meta.perPage : Global.perPage);
      vm.paging = ProjetosService.findPaginated({ 'page': page, 'per_page': perPage });
      vm.promise = vm.paging.$promise;
    }

    function orderData(field){
      vm.selected = [];
      var order = field.startsWith("-") ? field.substring(1) + " desc" : field;
      vm.paging = ProjetosService.findPaginated(
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
