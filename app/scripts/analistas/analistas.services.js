(function () {
    'use strict';

    angular
        .module('app')
        .factory('AnalistasService', AnalistasService);

    AnalistasService.$inject = ['$resource','Global'];

    function AnalistasService($resource,Global) {
        return $resource(Global.urlBase+'analista/:id', { id: '@_id' }, {
            update: {
                method: 'PUT'
            },
            findPaginated: {
                url: 'analista-paginated?page=:page&per_page=:per_page&order=:order'
            }
        });
    }

} ());
