/*eslint angular/file-name: 0*/
(function () {
    'use strict';

    angular.module('app')
        .constant('Global', {
            urlBase: _urlBase,
            perPage: 5,
            optionsPerPage: [5, 10, 15]
        });

})();
