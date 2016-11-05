(function () {
  'use strict';

  angular.module('app')
    .config(Config);

  Config.$inject = ['$mdThemingProvider', '$mdToastProvider'];
  /** @ngInject */
  function Config($mdThemingProvider, $mdToastProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('orange')
      .warnPalette('red');

    $mdToastProvider.addPreset('testPreset', {
      options: function() {
        return {
          template:
          '<md-toast>' +
          '<div class="md-toast-content">' +
          'This is a custom preset' +
          '</div>' +
          '</md-toast>',
          controllerAs: 'toast',
          bindToController: true
        };
      }
    });

  }

})();
