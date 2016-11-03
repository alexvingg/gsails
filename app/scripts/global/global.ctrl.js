(function () {

  'use strict';

  angular
    .module('app')
    .controller('GlobalCtrl', GlobalCtrl);

  GlobalCtrl.$inject = ['$state','Global'];

  function GlobalCtrl($state,Global) {
    var vm = this;
    vm.goto = goto;

    activate();

    function activate() {
      vm.optionsPerPage = Global.optionsPerPage;
    }

    function goto(state) {
      $state.go(state);
    }
  }

})();
