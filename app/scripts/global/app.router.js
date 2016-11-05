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
        abstract: true,
        url: '/cargos',
        templateUrl: '../templates/cargos/cargos-min.html',
      }).state('cargos.list', {
        url: '/list',
        templateUrl: '../templates/cargos/cargos-lista-min.html',
        controller: 'CargosListaCtrl as ctrl'
      }).state('cargos.add', {
        url: '/add',
        templateUrl: '../templates/cargos/cargos-form-min.html',
        controller: 'CargosFormCtrl as ctrl'
      });
    $urlRouterProvider.otherwise('home');
  }
})();
