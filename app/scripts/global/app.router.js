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
      }).state('cargos', {
        url: '/cargos',
        templateUrl: '../templates/cargos/cargos-lista-min.html',
        controller: 'CargosListaCtrl as ctrl'
      }).state('cargos/add', {
        url: '/cargos/add',
        templateUrl: '../templates/cargos/cargos-form-min.html',
        controller: 'CargosFormCtrl as ctrl'
      });
    $urlRouterProvider.otherwise('home');
  }
})();
