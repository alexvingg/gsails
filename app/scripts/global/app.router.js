(function () {
  'use strict';
  angular
    .module('app')
    .config(RouteConfig);

  RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RouteConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../templates/home-min.html'
      })/*.state('cargos', {
        url: '/cargos',
        templateUrl: '../templates/cargos/listar-cargos-min.html',
        controller: 'CargosCtrl as ctrl'
      })*/;
    $urlRouterProvider.otherwise('home');
  }
})();