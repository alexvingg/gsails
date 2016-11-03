(function () {
  'use strict';

  angular.module('app')
    .config(Config);

  Config.$inject = ['$mdThemingProvider'];
  /** @ngInject */
  function Config($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('orange')
      .warnPalette('red');
  }

})();
