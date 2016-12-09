(function () {
    'use strict';

    angular
        .module('app')
        .factory('ProjetosService', ProjetosService);

    ProjetosService.$inject = ['$resource','Global'];

    function ProjetosService($resource,Global) {
        return $resource(Global.urlBase+'projeto/:id', { id: '@_id' }, {
            update: {
                method: 'PUT'
            },
            findPaginated: {
                url: 'projeto-paginated?page=:page&per_page=:per_page&order=:order'
            }
        });
    }

} ());
