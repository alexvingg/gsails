(function () {

  'use strict';

  angular
    .module('app')
    .controller('AnalistasListaCtrl', AnalistasListaCtrl);

  AnalistasListaCtrl.$inject = ['AnalistasService','Global', '$state', '$mdToast'];

  function AnalistasListaCtrl(AnalistasService,Global, $state, $mdToast) {
    var vm = this;

    vm.loadPages = loadPages;
    vm.orderData = orderData;

    vm.edit = editar;
    vm.remove = remover;

    function editar(_id){
      $state.go('analistas.edit/:id', {id:_id});
    }

    function remover(){
      angular.forEach(vm.selected, function(value, key) {
        AnalistasService.remove({id:value.id}).$promise.then(function (data) {
          $mdToast.showSimple("Analista removido com sucesso.");
          vm.selected = [];
          loadPages(vm.currentPage);
        }).catch(function(response){
          $mdToast.showSimple(response.data.message);
        });
      });
    }

    activate();

    function activate() {
      vm.selected = [];
      vm.currentPage = 1;
    }

    function loadPages(page) {
      var perPage = (vm.paging ? vm.paging.meta.perPage : Global.perPage);
      vm.paging = AnalistasService.findPaginated({ 'page': page, 'per_page': perPage });
      vm.promise = vm.paging.$promise;
    }

    function orderData(field){
      vm.selected = [];
      var order = field.startsWith("-") ? field.substring(1) + " desc" : field;
      vm.paging = AnalistasService.findPaginated(
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
