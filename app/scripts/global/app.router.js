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
      }).state('cargos.edit/:id', {
        url: '/edit/:id',
        templateUrl: '../templates/cargos/cargos-form-min.html',
        controller: 'CargosFormCtrl as ctrl'
      })
      //analista
      .state('analistas', {
        abstract: true,
        url: '/analistas',
        templateUrl: '../templates/analistas/analistas-min.html',
      }).state('analistas.list', {
        url: '/list',
        templateUrl: '../templates/analistas/analistas-lista-min.html',
        controller: 'AnalistasListaCtrl as ctrl'
      }).state('analistas.add', {
        url: '/add',
        templateUrl: '../templates/analistas/analistas-form-min.html',
        controller: 'AnalistasFormCtrl as ctrl'
      }).state('analistas.edit/:id', {
        url: '/edit/:id',
        templateUrl: '../templates/analistas/analistas-form-min.html',
        controller: 'AnalistasFormCtrl as ctrl'
      });
      ;

    $urlRouterProvider.otherwise('home');
  }
})();
