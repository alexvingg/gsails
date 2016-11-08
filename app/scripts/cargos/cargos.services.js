(function () {
    'use strict';

    angular
        .module('app')
        .factory('CargosService', CargosService);

    CargosService.$inject = ['$resource','Global'];

    function CargosService($resource,Global) {
        return $resource(Global.urlBase+'cargo/:id', { id: '@_id' }, {
            update: {
                method: 'PUT'
            },
            findPaginated: {
                url: 'cargo-paginated?page=:page&per_page=:per_page&order=:order'
            }
        });
    }

} ());
