(function () {
  'use strict';

  angular.module('app')
    .config(Config);

  angular.module('app').filter('toDate', function() {
    return function(input) {
        return new Date(input);
    }
  });

  Config.$inject = ['$mdThemingProvider', '$mdToastProvider', '$mdDateLocaleProvider', 'moment'];
  /** @ngInject */
  function Config($mdThemingProvider, $mdToastProvider, $mdDateLocaleProvider, moment) {
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

    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('DD/MM/YYYY');
    };

  }

})();